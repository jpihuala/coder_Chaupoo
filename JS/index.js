    function shoppingCart() {
            const addToShoppingCart = document.querySelectorAll( '.add-to-cart-btn' );
            

            addToShoppingCart.forEach( ( addToCartButtons ) => {
                addToCartButtons.addEventListener( 'click', addToCartBtnClick )
            });

            function addToCartBtnClick( event ) {
                let btn = event.target;
                const combos = btn.closest( '.combo' );

                    const comboImg = combos.querySelector( '.combo-img' ).src;                        
                    const comboTitle = combos.querySelector( '.combo-title' ).textContent;
                    const comboPrice = combos.querySelector( '.combo-price' ).textContent;
                    
            
                modalCart( comboImg, comboTitle, comboPrice );

                cartCounterUpdate();
                
            };    

            const showCart = document.querySelector( '.show-cart' );
                
            function modalCart( comboImg, comboTitle, comboPrice ) {

                    let combosTitleRepeat = showCart.getElementsByClassName( 'shoppingCartComboTitle' );
                        
                    for( let i = 0; i < combosTitleRepeat.length; i++ ) {
                        if( combosTitleRepeat[i].innerHTML === comboTitle ) {
                            let combosTitleQuantity = combosTitleRepeat[i].parentElement.parentElement.querySelector( '.shoppingCartComboQuantity' );
                            combosTitleQuantity.value++;
                            cartTotalPrice();
                        
                            return;
                        }
                    };

                const shoppingCartDiv = document.createElement( 'div' );
                const cartModal =
                    ` 
                        <div class="row shoppingCartCombo mt-3 text-center">
                            <div class="col-3">
                                <img src=${comboImg} class="imagenesModal"/>
                                <h6 class="mt-2 shoppingCartComboTitle">${comboTitle}</h6>
                            </div> 
                            <div class="col-3">
                                <p class="combo-price shoppingCartComboPrice">${comboPrice}</p>
                            </div>
                            <div class="col-3">
                                <input class="text-center shoppingCartComboQuantity inputCuenta" type="number" value="1">
                            </div>
                            <div class="col-3">
                                <button class="btn btn-danger" id="remove-combo-btn" data-name="${comboTitle}">
                                    x
                                </button>
                            </div>
                        </div>
                    `
                                        
                shoppingCartDiv.innerHTML = cartModal;
                showCart.append( shoppingCartDiv );

                    const removeButton = shoppingCartDiv.querySelector( '#remove-combo-btn' );

                    removeButton.addEventListener( 'click', removeComboFromCart );

                    const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartComboQuantity' );
                    
                    inputCartQuantity.addEventListener( 'change', cartQuantityChange );
                
                    
                cartTotalPrice();
            };


            function cartCounterUpdate() {
                const cartCombosLength = document.querySelectorAll( '.shoppingCartCombo' );
                const cartCounter = document.querySelector( '#cart-counter' );
                cartCounter.innerHTML = cartCombosLength.length;
                cartTotalPrice();
            };  

            function cartTotalPrice() {
                var totalCount = 0;
                const totalPrice = document.querySelector( '.total-price' );
                const shoppingCartCombos = document.querySelectorAll( '.shoppingCartCombo' );
                
                shoppingCartCombos.forEach( ( shoppingCartCombo ) => {

                    const comboCartPriceElement = shoppingCartCombo.querySelector( '.shoppingCartComboPrice' );
                    const comboCartPrice = Number( comboCartPriceElement.textContent.replace( '$', '' ) );

                    const comboCartQuantityElement = shoppingCartCombo.querySelector( '.shoppingCartComboQuantity' );
                    const comboCartQuantity = Number( comboCartQuantityElement.value );

                    totalCount += comboCartPrice * comboCartQuantity;
                });

                totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
            };


            function removeComboFromCart(event) {
                const removeBtnClicked = event.target;
                removeBtnClicked.closest( '.shoppingCartCombo' ).remove();
                cartTotalPrice();
                cartCounterUpdate();
            };

            function cartQuantityChange(event) {
                const inputCartChange = event.target;
                inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
                cartTotalPrice();
                cartCounterUpdate();
            };

            const botonFinalizarCompra = document.querySelector( '.btn-finalizar-compra' );

            botonFinalizarCompra.addEventListener('click', finalizarCompraTotal);

            function finalizarCompraTotal() {
                showCart.innerHTML = '';
                cartTotalPrice();
                cartCounterUpdate();
            };

            const botonVaciarCarrito = document.querySelector( '.btn-vaciar-carrito' );
            
            botonVaciarCarrito.addEventListener('click', vaciarCarritoCompleto);

            function vaciarCarritoCompleto() {
                showCart.innerHTML = '';
                cartTotalPrice();
                cartCounterUpdate();
            };
    };
    
    shoppingCart();