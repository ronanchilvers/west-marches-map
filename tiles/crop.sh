#!/bin/bash

map=$1
size=$2
zoom=$3

rm -f $3/*.jpg

magick convert $map \
    -crop $2x$2 \
    -set filename:tile $3/%[fx:page.x/$2]-%[fx:page.y/$2] \
    +repage \
    -background black \
    -extent $2x$2 \
    %[filename:tile].jpg
