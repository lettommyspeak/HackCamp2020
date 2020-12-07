function displayRandomImages(){  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
     //address URL of the image  
     src: "https://i.imgur.com/LMdHjlg.jpeg",  
     //size for the image to be display on webpage  
     width: "370",  
     height: "370"  
   },   
   {  
     src: "https://i.pinimg.com/originals/50/74/af/5074afa5ccf856a92e7efabdfc6a1867.jpg",  
     width: "370",  
     height: "370"  
   },   
   {  
     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF46jjbZPZBfVdaaEXFMLbUwvCtTEvbbt-pA&usqp=CAU",  
     width: "370",  
     height: "370"  
   },  
   {  
     src: "https://i.pinimg.com/originals/d2/27/a8/d227a8dfd80a6f26009975fe9961a5ea.png",  
     width: "370",  
     height: "370"  
   },
   {
    src:"https://i.pinimg.com/474x/c1/a8/21/c1a821d7a74aca7cf731b4c2bf6078fc.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://i.pinimg.com/736x/0f/5e/b7/0f5eb7a48336b7110bedd83a83a96d2b.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://i.pinimg.com/originals/8b/b7/06/8bb706587b4968eb76d966806af9f943.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://i.pinimg.com/564x/05/69/84/056984d8235e537eb291e5fbcde4771a.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://i.pinimg.com/736x/0d/33/ef/0d33ef956f2d26b34b4f939ac73d8641.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://data.whicdn.com/images/326706263/original.jpg",
    width: "370",
    height: "370"
   },
   {
    src:"https://s1.stickers.cloud/packs/99fd46c2-4ec1-42ff-90e4-39988aaebcd2/webp/adda301e-abfc-4e27-b24f-8d25d90eead7.webp",
    width: "370",
    height: "370"
   },
  
   {
    src:"https://media.discordapp.net/attachments/773402392422383616/785249807424946176/Screen_Shot_2020-12-06_at_1.01.48_PM.png?width=842&height=550",
    width: "600",
    height: "400"
   },
   {
    src:"https://pics.me.me/thumb_damn-the-person-reading-this-is-cute-43373379.png",
    width: "300",  
    height: "292"
   },
   {
    src:"https://i.pinimg.com/736x/c8/29/2f/c8292f91d6b607e54e5e2222a57caf55.jpg",
    width: "367.2",
    height: "411.5"
   },
      {
    src:"https://i.kym-cdn.com/photos/images/original/001/691/857/e04.jpg",
    width: "375",
    height: "348.7"
   },
   {
    src:"https://i.pinimg.com/originals/28/1f/f3/281ff38bd97112bc91bbe38107f489b9.jpg",
    width: "360",
    height: "267"
   },
  {
    src:"https://i.pinimg.com/originals/0d/c3/55/0dc355dd8ad423735c9db7056b6f7199.jpg",
    width: "470",
    height: "370"
   },
  {
    src:" https://data.whicdn.com/images/332660437/original.jpg",
    width: "370",
    height: "370"
   },
  {
    src:" https://images7.memedroid.com/images/UPLOADED396/5f3ff8e0f37b4.jpeg",
    width: "370",
    height: "370"
   },
    {
    src:" https://i.pinimg.com/originals/fa/fe/fd/fafefdbecade79bf0029a6bec0e81980.jpg",
    width: "370",
    height: "370"
   },
   {
    src: "https://i.redd.it/9q0csmn30yp31.jpg",
    width: "500",
    height: "280"
   }  
    
    ];  
      
  //    find the length of the array of images  
  var arrayLength = imageArray.length;  
  var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {
         newArray[i] = new Image();
    newArray[i].src = imageArray[i].src;
    newArray[i].width = imageArray  [i].width;
      newArray[i].height = imageArray[i].height;

  }    
    
    // create random image number  
  function getRandomNum(min, max) {
    // generate and return a random number for the ima  ge to be displayed   
    imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
    return newArray[imgNo];  
  }  
  
  //  0 is first image and (preBuffer.length - 1)   is last image of the array  
  var newImage = getRandomNum(0, newArray.length - 1);
  // remove the previous images  
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the new random image    
  document.getElementById("boxed").appendChild(newImage);
}  