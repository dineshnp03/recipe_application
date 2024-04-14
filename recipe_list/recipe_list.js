function getId(productId) {

    sessionStorage.setItem("product_id", productId);
    window.location.href = "index.html";
  }