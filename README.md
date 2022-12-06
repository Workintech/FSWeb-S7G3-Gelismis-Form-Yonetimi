# Sprint Gün Projesi: Gelişmiş Form Yönetimi - Kullanıcı Katılımı

## Proje Açıklaması

Şimdiye kadar basitten karmaşığa birçok farklı form yönetimi stili gördük. Bugün içinizdeki form sihirbazını serbest bırakacağız! 🧙

## Talimatlar

### Görev 1: Projeyi Kurun

- [ ] Forklayın, klonlayın, klasöre girin.
- [ ] `npx create-react-app kullanici-katilimi` komutuyla boş bir çalışma başlatın.
- [ ] Oluşturulan `kullanici-katilimi` klasörüne girin.
- [ ] `npm` yi kullanarak, aşağıdaki bağımlılıkları React appinize ekleyin:
  - `yup`
  - `axios`
- [ ] `Form.js` adında bir bileşen oluşturun, `App.js` dosyanıza import edin, ve bileşen için JSX lerinizi buraya yazın.

### Görev 2: MVP

#### gelişmiş Formunuzu yaratın

Yeni bir kullanıcıyı sistemimize dahil etmek için bir form oluşturmak istiyoruz. Yeni kullanıcımız hakkında en azından aşağıdaki bilgilere ihtiyacımız var:

- [ ] İsim (ismi, soyismi)
- [ ] Email
- [ ] Şifre
- [ ] Kullanım Şartları (Terms of Service) (checkbox)
- [ ] Gönder butonu (formu göndermek için).

#### Form Validation(doğrulama) ve Hata Mesajları Uygulayın

Form doğrulama, kullanıcıya bir uygulamanın ince elenmiş sık dokunmuş hissini veren yönlerinden biridir. Bunu göz önünde bulundurarak, aşağıdakileri uygulayın:

- [ ] Yup'u kullanarak, _en az_ 2 adet doğrulama ve hata doğrulamada varsa ekranda gösterilecek hata mesajı ekleyin.

#### POST Request Oluşturun

Verileri "POST" edebilmek, beceri düzeyiniz ne olursa olsun, herhangi bir geliştiricinin temel becerisi olmalıdır.

- [ ] Form verilerinizi "axios"u kullanarak aşağıdaki uç noktaya gönderen  bir "POST" isteği oluşturun: _`https://reqres.in/api/users`_
- [ ] Doğru cevabı aldığınızı görebilmek için `console.log()` kullanın

(Not: Merak edenler için, bu ödevin API'si için [reqres.in](https://reqres.in/) kullanıyoruz. Regres gönderdiğimiz herhangi bir veri için bir "POST" isteğini simüle etmemize izin veren ücretsiz bir API'dir. Oldukça harika!

#### Döndürülen Verileri Ekranda Görüntüle

Verileri çektiğinizde bunları kullanmak isteyeceksiniz değil mi? O zaman uygulamanızda kullanıcıların bir listesini görüntüleyin.

- [ ] `kullanıcılar` adında bir özellik ekleyin, boş bir dizi olarak yüklensin
- [ ] Yeni kullanıcı eklemek ve `kullanıcılar` stateini güncellemek için her seferinde bir `POST` request atın 
- [ ] Uygulamanızda `kullanıcılar` ı render edin. POST request cevabını düzgün görüntülemek için <pre> html etiketini ve JSON.stringify() yöntemini kullanabilirsiniz.

### Görev 3: Esnek Görevler

Aşağıda, projeniz için MVP yi sağladıktan sonra denemeniz gereken zorlu hedefler verilmiştir:

- [ ] Uygulamanıza basit stiller ekleyin. İstediğiniz stilleme yöntemleriyle projenize güzel bir görüntü katın.
- [ ] Formunuza bir dropdown menü ekleyin. Stateinize bir `rol` değeri atayın ve kullanıcılara değişik roller atamak için dropdown ekleyin.
- [ ] Formunuza istediğiniz 3 yeni input (doğrulama ve hata mesajlarıyla birlikte) ekleyin
- [ ] Eğer bir kullanıcı `waffle@syrup.com` mail adresini girerse, mevcut doğrulayıcınıza, bu email adresinin daha önce eklendiği uyarısını verecek bir handling ekleyin.

