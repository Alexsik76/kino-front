<template>
 <section class="form">
            <div class="payment-container">
                <h2>Оплата</h2>
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="example@email.com">
                    </div>
            
                    <div class="form-group">
                        <label for="name">Ім'я:</label>
                        <input type="text" id="name" name="name" required placeholder="Ваше ім'я">
                    </div>
            
                    <div class="form-group">
                        <label for="card-number">Номер картки:</label>
                        <input type="text" id="card-number" name="card-number" required placeholder="0000 0000 0000 0000"
                            maxlength="19">
                    </div>
            
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiry-date">Дата (MM/YY):</label>
                            <input type="text" id="expiry-date" name="expiry-date" required placeholder="MM/YY" maxlength="5">
                        </div>
            
                        <div class="form-group">
                            <label for="cvv">CVV:</label>
                            <input type="password" id="cvv" name="cvv" required placeholder="123" maxlength="3">
                        </div>
                    </div>
            
                    <button type="submit">Оплатити</button>
                </form>
            </div>

        </section>
</template>
