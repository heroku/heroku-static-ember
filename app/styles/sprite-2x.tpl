@media (min--moz-device-pixel-ratio: 2),
     (-o-min-device-pixel-ratio: 2/1),
     (-webkit-min-device-pixel-ratio: 2),
     (min-device-pixel-ratio: 2)
{
  .icon {
    background: url('sprite-2x.png') no-repeat;
    background-size: <%= getCSSValue(layout.width) %> <%= getCSSValue(layout.height) %>;
  }
}
