# imagemin
- crop, minify, and downsample images from the command line

## Dependencies
- [homebrew](https://brew.sh/)
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [gulp](https://gulpjs.com/)

## Setup
1. Clone this repo.
2. Move to the repo in a terminal/iterm pane.
3. Install packages by running the following in terminal/iterm from the repo:
 • `brew install imagemagick`
 • `brew install graphicsmagick`
 • `npm install`

## Usage
1. Add images you and to refine to the `/img` folder.
2. Open `gulpfile.js` in your texteditor of choice.

You'll see two tasks in gulpfile:
1. Running `gulp resize` will resize all .jpgs in the img folder using the attributues specified.
2. Running `gulp tinyimg` will minify all images that have been resized using the `https://tinyjpg.com/` api service. 

**Note: to use tinyimg, you will have to [set up your own api key](https://tinyjpg.com/developers) and replace `api-key-here`**