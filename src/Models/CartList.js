class CartList {
   constructor() {
      this.arr = [];
   }

   // Method
   _findIndex(id) {
      let index = -1;

      this.arr.forEach((obj, i) => {
         if (obj.product.id == id) {
            index = i;
         }
      });

      return index;
   }

   addProductToCart(obj) {
      this.arr.push(obj);
   }

   deleteProductFromCart(id) {
      let index = this._findIndex(id);

      if (index !== -1) {
         this.arr.splice(index, 1);
      }
   }

   updateProductInCart(obj) {
      let index = this._findIndex(obj.product.id);

      if (index !== -1) {
         this.arr[index] = obj;
      }
   }

   getProductById(id) {
      let index = this._findIndex(id);

      if (index !== -1) {
         return this.arr[index];
      }

      return null;
   }

   checkIdDuplicate(id) {
      let exist = false;

      for (let i = 0; i < this.arr.length; i++) {
         const obj = this.arr[i];
         if (obj.product.id == id) {
            exist = true;
            break;
         }
      }

      if (exist) {
         return false;
      }

      return true;
   }

   deleteAllCart() {
      this.arr.splice(0, this.arr.length);
   }
}

export default CartList;
