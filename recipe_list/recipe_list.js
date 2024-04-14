function getId(productId) {
 
  sessionStorage.setItem("product_id", productId);
  window.location.href = "../recipe_details/index.html";
}