


$(document).ready(function(){
//1. Calculate and display the sub total price of each item.
  $(document).on('click', '.calcPricesBtn', function() {
    // Wenn auf btn geklickt wird dann ->
    let totalPrice = 0;
      $('.item-row').each(function() {
      // Gehe JEDE einzelne Produktzeile nacheinander durch
        let row = $(this); // Hier definieren wir 'row' 
        let price = parseFloat(row.find('.price').text()); // Finde die Zeile, in der gerade getippt wurde
        //('.row') = Du sagst genauer: "Klettere solange nach oben, bis du das Element mit der Klasse .row findest."
        let qty = parseFloat(row.find('.qty').val());
        //.text() = Du hast das Preisschild gefunden. Jetzt liest du ab, was draufsteht – zum Beispiel den Text "60.00".
        let subtotalCalc = price * qty;
        row.find('.subtotal').text(subtotalCalc);
        // Subtotal in das entsprechende HTML-Element schreiben

//2. Calculate and display the total price.
        //bei input kann nur mit .val gesucht werden, bei text nur mit .text() !!
        totalPrice = totalPrice + subtotalCalc;
      });
      $('h2').text('Total Price: ' + totalPrice);


  });

//3. Allow user to add a new item.
  $(document).on('click', '.create-btn', function(){
    let newItemName = $('.new-item-name').val();
    let newItemPrice = $('.new-item-price').val();

    let newRow = `      
        <div class="row item-row align-items-center mb-3">
          <div class="col-3">
            <span class="name">${newItemName}</span>
          </div>
          <div class="col-2">
            <span class="price">${newItemPrice}</span>
          </div>
          <div class="col-3">
            <input type="text" class="qty form-control" value="0">
          </div>
          <div class="col-2">
            <span class="subtotal">0</span>
          </div>
          <div class="col-2">
            <button class="btn btn-sm btn-outline-danger delete-btn" type="button">Delete</button>
          </div>
        </div>`

    $('.shoppingCart').append(newRow);
  })

//4. Allow user to delete an item.
  $(document).on('click', '.delete-btn', function(){
    //.find .remove()
    $(this).parents('.item-row').remove();
    //!! $(this) bedeutet übersetzt: "Genau der Button, auf den jetzt in diesem Bruchteil einer Sekunde geklickt wurde." (Der Gast, der die Hand hebt) !!
    //.parents('.item-row') bedeutet: "Starte bei diesem konkreten Button und klettere den HTML-Baum nach oben, bis du die passende Zeile (.item-row) findest."
  })
  

});


//Your assignment needs to satisfy the following criteria:
//5. Use Git to manage version control and push your work to a GitHub repository.


/* 


*/