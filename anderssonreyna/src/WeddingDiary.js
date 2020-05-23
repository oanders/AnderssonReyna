import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import oskar_steffy from "./images/oskar_steffy.png";
import Image from "react-bootstrap/Image";

function WeddingDiary() {
  return (
    <div className="Wedding-Home">
      <div class="container">
        <div class="jumbotron text-center">
          <h1 className="WeddingDiary-Title">
            <strong>Oskar and Steffany</strong>
          </h1>
          <p class="lead">15 May 2021</p>
          <h2>Welcome to our Wedding's website!</h2>
          <br></br>
          <Image src={oskar_steffy} roundedCircle />
          <p>
            Here you will find information about our Wedding and also weekly
            updates. We hope you enjoy this journey as much as we do!
          </p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          ante a nibh aliquet condimentum at ac leo. Pellentesque tincidunt
          pellentesque ultricies. Pellentesque sollicitudin, ex eget gravida
          elementum, lectus nibh accumsan turpis, quis fermentum nulla enim vel
          eros. Praesent finibus est neque, sit amet dignissim orci fringilla
          id. In in lacus consectetur, posuere ligula quis, volutpat neque.
          Mauris luctus hendrerit leo ac molestie. Donec venenatis risus ac diam
          aliquet imperdiet. Etiam in luctus magna. Nullam rutrum hendrerit
          tempor. Suspendisse mi quam, tristique quis vestibulum placerat,
          auctor in tellus. Sed semper, sem ac volutpat placerat, nisi nulla
          scelerisque ex, ut dictum metus ligula id metus. Vestibulum egestas
          sapien a massa vestibulum elementum. Donec a efficitur ipsum, eget
          feugiat lorem. Donec sit amet tristique nulla. Nam dapibus, lorem quis
          sodales mattis, elit elit accumsan diam, at sagittis nisi felis eget
          ante. Aenean aliquam non orci quis pharetra. Sed semper elit id tortor
          luctus, eget accumsan mi tempus. Cras accumsan lectus interdum lacus
          laoreet pharetra. Pellentesque erat ex, facilisis nec magna vel, porta
          tempor nulla. In diam libero, maximus at venenatis eget, iaculis eget
          ligula. Suspendisse potenti. Vestibulum ut ligula est. Aliquam nibh
          tortor, tristique quis condimentum et, bibendum at velit. Vestibulum
          et tempor mi, id porttitor risus. Quisque aliquet consequat bibendum.
          Donec sollicitudin nunc vel diam auctor, ac hendrerit arcu maximus.
          Fusce dolor massa, feugiat eget ullamcorper non, tincidunt et risus.
          Maecenas egestas non lacus nec sollicitudin. Vivamus tempor, sem eu
          mollis tincidunt, nibh justo porta velit, a condimentum nisl nisl quis
          enim. Vivamus et tempor justo. In hac habitasse platea dictumst.
          Curabitur in fermentum urna. Sed a tincidunt metus. Morbi diam arcu,
          feugiat ac leo malesuada, interdum sodales orci. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Suspendisse posuere lorem a fringilla aliquam. Proin pulvinar, sapien
          eget blandit auctor, tortor nisl feugiat sem, blandit facilisis risus
          quam eu ipsum. Nulla lacinia lacinia diam vitae sagittis. Sed ut
          tortor auctor, ornare sapien ac, suscipit elit. In vehicula egestas
          magna at volutpat. Nam rutrum pulvinar sem non pharetra. Donec aliquam
          augue risus, quis faucibus enim consectetur non. Fusce non sagittis
          enim. Phasellus sagittis, ante at tincidunt vehicula, ipsum odio
          pretium neque, feugiat sollicitudin orci nisl ac lorem. Maecenas
          tempus felis elit, non convallis mauris sodales quis. Vivamus faucibus
          ante varius, luctus erat quis, varius sapien.
        </div>
      </div>
    </div>
  );
}

export default WeddingDiary;
