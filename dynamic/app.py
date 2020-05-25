import os
import boto3

from flask import Flask, jsonify, request


app = Flask(__name__)

GUESTS_TABLE = os.environ["GUESTS_TABLE"]
client = boto3.client("dynamodb")

IS_OFFLINE = os.environ.get("IS_OFFLINE")


if IS_OFFLINE:
    client = boto3.client(
        "dynamodb", region_name="localhost", endpoint_url="http://localhost:8000"
    )

else:
    client = boto3.client("dynamodb")


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/guests/<string:guest_id>")
def get_guest(guest_id):

    resp = client.get_item(TableName=GUESTS_TABLE, Key={"guestId": {"S": guest_id}})

    item = resp.get("Item")

    if not item:
        return jsonify({"error": "Guest does not exist"}), 404
    return jsonify(
        {
            "name": item.get("name").get("S"),
            "attending": item.get("attending").get("S"),
            "additionals": item.get("additionals").get("N"),
        }
    )


@app.route("/guests")
def list_guests():
    resp = client.scan(TableName=GUESTS_TABLE)
    guests = []
    for item in resp["Items"]:
        guests.append(
            {
                "name": item.get("name").get("S"),
                "attending": item.get("attending").get("S"),
                "additionals": item.get("additionals").get("N"),
            }
        )
    return jsonify({"guests": guests})


@app.route("/guests", methods=["POST"])
def create_guest():
    guest_id = request.json.get("guestId")
    email = request.json.get("email")
    name = request.json.get("fullName")
    address = request.json.get("address")
    phone = request.json.get("phone")
    attending = request.json.get("attending")
    additionals = request.json.get("additionals")
    if not guest_id or not name or not email or not additionals:
        return (
            jsonify({"error": "Please provide guestId, name, email and additionals."}),
            400,
        )

    resp = client.put_item(
        TableName=GUESTS_TABLE,
        Item={
            "guestId": {"S": guest_id},
            "email": {"S": email},
            "name": {"S": name},
            "address": {"S": address},
            "phone": {"S": phone},
            "attending": {"S": attending},
            "additionals": {"N": additionals},
        },
    )

    return jsonify(
        {
            "guestId": guest_id,
            "email": email,
            "name": name,
            "address": address,
            "phone": phone,
            "attending": attending,
            "additionals": additionals,
        }
    )
