const products = [
    ["Lenovo IdeaPad 5 Laptop", 555.99, "Ultrabook with AMD Ryzen 5 and 15.6\" display", 2021],
    ["Samsung Galaxy S24 Smartphone", 999.99, "Flagship phone with AMOLED display and triple camera", 2022],
  ];
 
  // 1. massive yeni mal elave etmek - Add
  // 2. massivden ada gore mal silmek  - Delete
  // 3. qiymete gore sort etmek - sort price
  // 4. ile gore sort etmek imkani olmalidir - sort year
  // 5. malin qiymetini deyishmek imkani olmalidir - change
  // 5. mallari gostermek imkani olmalidir - Show
 
  while   (true){
      let input=prompt("1.Add new product\n2.Delete product\n3.Show products\n4.Sort by price\n5.Sort by year\n6.Change the product price")
      // add product
      if(input=='1'){
          let name=prompt("Enter the new product name")
          let price=prompt("Enter the new product price")
          let description=prompt("Enter new product description")
          let year=prompt("Enter the new product year")
          let product=[name,parseFloat(price),description,parseInt(year)];
          products.push(product)
          alert("Product succesfully added!")
      }

      // delete product
      else if(input=='2'){
         let productt = prompt("Enter product name");
     
         let findIndex = products.findIndex(item => item[0] === productt);
     
         if (findIndex === -1) {
           alert("Product not found");
         } else {
           products.splice(findIndex, 1);
           alert("Product deleted successfully");
         }
       }
       // show product
      else if(input=='3'){
        alert(products.map(item =>
        `Product name: ${item[0]}\nPrice: ${item[1]}\nDescription: ${item[2]}\nYear: ${item[3]}\n------------------------------------------------------------`).join("\n"));  
    }
      // sort product by price
      else if(input=='4'){
       products.sort((a, b) => a[1] - b[1]);
          alert(products.map(item =>
      `Product name: ${item[0]}\nPrice: ${item[1]}\nDescription: ${item[2]}\nYear: ${item[3]}\n------------------------------------------------------------`
      ).join("\n")
         );    
       }

       // sort by year
       else if(input=='5'){
        products.sort((a, b) => a[3] - b[3]);
        alert(products.map(item =>
        `Product name: ${item[0]}\nPrice: ${item[1]}\nDescription: ${item[2]}\nYear: ${item[3]}\n------------------------------------------------------------`).join("\n"));  
       }

       //change
      else if(input=='6'){
        let productNamee=prompt("Enter product name ")
        let findIndex = products.findIndex(item => item[0] === productNamee);
        if(findIndex==-1){
            alert("Product not found");
        }
        else{
            let newPrice=prompt("enter new price")
            products[findIndex][1]= parseFloat(newPrice);
            alert("product updated successfully")
        }
    }
  
  }

