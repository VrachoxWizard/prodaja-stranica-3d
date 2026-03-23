# Conversion Changelog

## Što je promijenjeno i zašto

### 1. Pravi sustav za prikupljanje upita (Umjesto simulacije)
**Što je novo:** 
- Uklonjen je lažni `setTimeout` iz `ContactSection.tsx`.
- Ubačen je pravi `fetch` poziv prema Web3Forms endpointu uz dodavanje `name` atributa na sva polja forme.
- Dodani su direktni "mailto:" i WhatsApp linkovi ispod same forme.
**Zašto:**
- Simulacija kontakt forme ubijala je jedinu svrhu web stranice: prikupljanje leadova. Sada je omogućeno pravo slanje upita bez potrebe za složenom backend infrastrukturom.
- Alternativni kontakt linkovi osiguravaju konverziju čak i kod korisnika koji izbjegavaju forme.

### 2. "Pricing" kao prodajni alat
**Što je novo:** 
- Ubačene su "bestFit" (kome je namijenjeno) i "turnaround" (procjena trajanja) oznake na kartice s paketima.
**Zašto:**
- Cjenik više nije suhoparni popis značajki, već alat za brzo samo-kvalificiranje klijenata. 

### 3. "Portfolio" kao stvarni dokaz (Social Proof)
**Što je novo:** 
- Apstraktna pojašnjenja (poput "Jasna navigacija") zamijenjena su konkretnim primjerima poslovnih rezultata (npr. "Povećanje upita +120%" za ordinaciju, "Izravne rezervacije" za apartman).
**Zašto:**
- Apstrakcija ne prodaje na B2B tržištu. Konkretni scenariji "Prije/Poslije" grade povjerenje jer klijent u njima prepoznaje svoje probleme.

### 4. Optimizacija 3D animacija za performanse (LCP)
**Što je novo:** 
- Cijeli 3D Canvas (`Environment.tsx`) se sada učitava pomoću React `lazy` i `Suspense` tehnike.
- Na mobilnim uređajima, teški lebdeći Blueprint 3D elementi su potpuno isključeni.
**Zašto:**
- Previše 3D elemenata na mobitelima drastično usporava mobitele i uništava conversion rate zbog blokiranja glavnog threada. Ovo rješenje zadržava premium osjećaj na jakom hardveru, a štedi bateriju i nudi fluidno iskustvo na mobitelima.

### 5. Sticky "Call-To-Action" za mobitele
**Što je novo:** 
- Dodan fiksni CTA gumb na dno ekrana kada se stranica gleda preko mobitela.
**Zašto:**
- Omogućava posjetitelju da u bilo kojem trenutku klikne i pošalje upit, bez obzira dokle je uspio skrolati.

### 6. Ispravljeni UX Bugovi
**Što je novo:** 
- Ispravljen je krivi anchor link na Hero sekciji (`#process` u `#proces`).

---

## Koji popravci će najviše povećati broj upita?
1. **Prava kontakt forma:** Očigledno - jer omogućava pravoj poruci da dođe do inboxa klijenta.
2. **Oznake kome je paket namijenjen:** Time se posjetitelj odmah poistovjeti "Aha, ovo je moj paket", pa se smanjuje tzv. *decision fatigue*.
3. **Micanje apstraktnog portfelja za stvarne primjere rezultata:** Ljudi ne kupuju kod i dizajn, kupuju rezultat (vizibilitet i smanjenu brigu oko weba).
4. **Sticky CTA na mobitelu:** Skraćuje vrijeme od "Sviđa mi se ovo" do poduzimanja prave akcije.

---

## Što trenutno ovisi o inputima stvarnog poslovanja?
Kako bi stranica bila u potpunosti spremna za spajanje domene i prikupljanje klijenata, vlasnik web stranice još uvijek mora osigurati sljedeće:

1. **Web3Forms / Formspree Access Key:** U datoteci `ContactSection.tsx`, vrijednost `YOUR_WEB3FORMS_ACCESS_KEY_HERE` mora biti zamijenjena sa stvarnim API ključem kreiranim za pravu email adresu na koju stižu upiti.
2. **Pravi opcionalni SEO / Metadata podaci:** Kao što je rečeno, ovaj sprint je ignorirao SEO. Vlasnik mora uložiti vrijeme u `robots.txt`, XML sitemap i prave Canonical URl-ove ovisno o domeni.
3. **Pravni podaci u Footeru:** Linkovi na *Uvjete poslovanja* i *Politiku privatnosti* trenutno su "href='#" i moraju dobiti linkove na stvarne GDPR-ready dokumente.
4. **Telefonski broj i email u Footeru & Formi:** Zamijeniti `info@vasatvrtka.hr` i +385 broj sa stvarnim podacima poduzeća.
