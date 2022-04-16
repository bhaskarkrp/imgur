let urlForImage =
  "https://api.unsplash.com/photos/random?count=40&client_id=Hk3Ab_ZYrvm7wRHoZCJhyb9j_vJOdO-815ADdt25Kz0";
//   "https://api.unsplash.com/photos/?client_id=Hk3Ab_ZYrvm7wRHoZCJhyb9j_vJOdO-815ADdt25Kz0";

let imageData = [];
const imageContainer = document.querySelector("#image_list");
const loading = document.querySelector("#loading-State");
async function getImage() {
  imageData = [];
  let result = await fetch(urlForImage).then((result) => result.json());
  imageData = result;
  //   console.log(result);
  //   else {
  imageData.map((data) => appendData(data));
  imageData = [];
  //   }
}
// console.log(imageContainer);

if (imageData.length === 0) {
  //   console.log("OKAy");
  loading.style.display = "block";
} else {
  loading.style.display = "none";
}

function appendData(data) {
  let div = document.createElement("div");
  //   div.style.height = "100%";
  div.style.width = "200px";
  div.style.boxShadow = "0 8px 16px 0 rgb(0 0 0 / 16%";
  div.style.marginBottom = "15px";

  let image = document.createElement("img");
  image.src = data.user.profile_image.large;
  image.style.width = "100%";

  let innerDiv = document.createElement("div");
  innerDiv.className = "innerDiv_name_div";

  let p = document.createElement("p");
  p.innerText = `${data.user.first_name} ${data.user.last_name}`;
  p.className = "p_name";

  let divLAst = document.createElement("div");
  divLAst.className = "count_social";

  let downloadDiv = document.createElement("div");
  downloadDiv.className = "div_icon";
  let iconDownload = document.createElement("p");
  iconDownload.innerHTML =
    '<i class="fa fa-download" style="font-size=100px"></i>';
  let download = document.createElement("p");
  download.innerText = data.downloads;
  downloadDiv.append(iconDownload, download);

  let likeDiv = document.createElement("div");
  likeDiv.className = "div_icon";
  let iconLike = document.createElement("p");
  iconLike.innerHTML = '<i class="fa fa-heart" style="font-size=100px"></i>';
  let like = document.createElement("p");
  like.innerText = data.likes;
  likeDiv.append(iconLike, like);

  let viewDiv = document.createElement("div");
  viewDiv.className = "div_icon";
  let iconView = document.createElement("p");
  iconView.innerHTML = '<i class="fa fa-eye" style="font-size=100px"></i>';
  let view = document.createElement("p");
  view.innerText = data.views;
  viewDiv.append(iconView, view);

  divLAst.append(downloadDiv, likeDiv, viewDiv);
  innerDiv.append(p, divLAst);
  div.append(image, innerDiv);

  imageContainer.append(div);
}

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let innerHeight = window.innerHeight;
  let scrollHeight = document.documentElement.scrollHeight;

  if (scrollTop + innerHeight >= scrollHeight) {
    getImage();
  }
});

getImage();
