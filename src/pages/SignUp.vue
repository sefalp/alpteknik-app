<template>
   <form class="signup-form">
        <div class="signup-container">
        <div class="signup-form-group">
            <label for="exampleInputEmail1">Email adresi</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">Bilgileriniz kimseyle paylaşılmayacaktır.</small>
        </div>
        <div class="signup-form-group">
            <label for="exampleInputEmail1">Şifre</label>
            <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Şifre">
        </div>
                <div class="signup-form-group">
            <label for="exampleInputEmail2">Şifre Tekrarı</label>
            <input type="password" class="form-control" id="exampleInputPassword2" aria-describedby="passwordHelp2" placeholder="Şifre Tekrarı">
        </div>
        <div class="signup-form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Sözleşmeyi okudum ve kabul ediyorum.</label>
        </div>
        
        <button type="submit" class="signup btn btn-primary">Üye Ol</button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>
.signup-container{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup-form-group{
  width: 30%;
  margin-bottom: 1.2rem;
}


.signup.btn.btn-primary{
    width: 12%;
}


.sigup-form-group .form-check{
  display: flex;
  align-items: center;
  justify-content: center;
}

.sigup-form-group .form-check-label{
  margin-left: .3rem;
}

</style>