<template>

    <div class="communication-first-row">

    <div class="communication-info-container">
      <div class="communication-info">
            <p class="phone-number"><b>Tel: </b>532-251-50-38</p>
            <p class="email-adress"> <b>Mail: </b>alpteknikhirdavat@gmail.com </p>
            <p class="adress"><b>Adres: </b> Alibeyköy, Atatürk Cd. No:56, 34060 Eyüpsultan/İstanbul</p>
      </div>

      <div class="google-maps">
          <iframe class="google-maps-visual" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6447887955533!2d28.939426715663583!3d41.0767565231565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0d78f452ba5%3A0xf8d8aeb787c4db68!2sAlp%20Anahtar!5e0!3m2!1str!2str!4v1602543113791!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>

    <div class="reach-to-us">

        

    </div>






  </div>
 

</template>

<script>
export default {

}
</script>

<style>



.communication-info-container{

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: .1rem black solid;
    width: 80rem;
    height: 40rem;
    padding: 2rem;
}

.communication-info{
    display: flex;
    flex-direction: column;
    padding: 3rem;
}

.communication-info p{
    font-size: 1.5rem;
}

.info-elements{
    padding-bottom: 1.5rem;
}

.google-maps{
    padding: 2rem
}

.google-maps-visual{
    width: 35rem;
    height: 35rem;
}

</style>