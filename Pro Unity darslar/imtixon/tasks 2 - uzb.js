/**
 * 1) Bu safar hech qanday tarix yoki nazariya yo‘q. Quyidagi misollarda accum funksiyasini qanday yozish ko‘rsatilgan:
        Misollar:
        accum("abcd") -> "A-Bb-Ccc-Dddd"
        accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        accum("cwAt") -> "C-Ww-Aaa-Tttt"
    accum parametri faqat a..z va A..Z harflaridan iborat bo‘lgan qatorni bildiradi.
 * 
 * 2) Sizga sonlardan iborat massiv beriladi, barcha musbat sonlarning yig‘indisini qaytaring.

        Misol: [1,-4,7,12] => 1 + 7 + 12 = 20

    Eslatma: agar qo‘shadigan hech narsa bo‘lmasa, yig‘indi odatda 0 ga teng.
 * 
 * 3) Birinchi kirish massivi imtihondagi to‘g‘ri javoblarning kaliti hisoblanadi, masalan ["a", "a", "b", "d"]. Ikkinchisi esa o‘quvchining javoblari.

        Ikkala massiv bo‘sh emas va teng uzunlikda bo‘ladi. Natijada ballni hisoblash kerak: har bir to‘g‘ri javob uchun +4, har bir noto‘g‘ri javob uchun -1 va bo‘sh javob (bo‘sh satr) uchun +0 ball beriladi.

        Agar umumiy ball < 0 bo‘lsa, 0 qaytariladi.

        Masalan:

        checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
        checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
        checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
        checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 * 
 * 4) Berilgan qator ichidan kichik harfdagi unli tovushlarni (a, e, i, o, u) olib tashlaydigan shortcut funksiyasini tuzing.

        Misollar
        "hello"     -->  "hll"
        "codewars"  -->  "cdwrs"
        "goodbye"   -->  "gdby"
        "HELLO"     -->  "HELLO"
        katta harflardagi unlilar haqida tashvishlanmang
 * 
 * 5) Sizga uchburchakning ikkita ichki burchagi (graduslarda) beriladi.

    Uchinchi burchakni qaytaradigan funksiya yozing. Uchburchak ichki burchaklari yig‘indisi doimo 180 ga teng.
 * 
 * 6) Berilgan qator (katta-kichik harfni hisobga olmasdan) palindrom ekanligini tekshiradigan funksiya yozing.

    Palindrom — bu so‘z, son, ibora yoki boshqa belgilar ketma-ketligi bo‘lib, chapdan o‘qiganda ham, o‘ngdan o‘qiganda ham bir xil bo‘ladi, masalan "madam" yoki "racecar".
 * 
 * 7) Ushbu sodda mashqda siz integer qiymatini qabul qilib, berilgan limit qiymatigacha bo‘lgan barcha ko‘paytmalari ro‘yxatini qaytaradigan dastur yozasiz. Agar limit integerga karrali bo‘lsa, uni ham qo‘shish kerak. Funksiyaga faqat musbat butun sonlar beriladi (0 emas). Limit doimo asosiy sonidan katta bo‘ladi.

    Masalan, (2, 6) parametrlari berilsa, funksiya [2, 4, 6] qaytaradi, chunki 2, 4 va 6 sonlari 2 ga karrali.
 * 
 * 8) Sizga massiv a va qiymat x beriladi. Sizning vazifangiz — massiv ichida x qiymati mavjud yoki yo‘qligini tekshirish.

    Massivda sonlar yoki satrlar bo‘lishi mumkin. X istalgan turda bo‘lishi mumkin.

    Agar massiv ichida qiymat mavjud bo‘lsa true, aks holda false qaytaring.
 * 
 * 9) Sizning jamoangiz yangi matn muharriri yozmoqda va sizga qatorlarni raqamlashni amalga oshirish topshirig‘i berilgan.

    Funksiya yozing, u qatorlar ro‘yxatini qabul qilib, har bir qatordan oldin to‘g‘ri tartib raqamini qo‘shib qaytarsin.

    Raqamlash 1 dan boshlanadi. Format: n: string. Diqqat qiling, n va string orasida ":" va bo‘sh joy bo‘ladi.

    Misollar: (Kirish --> Chiqish)

    [] --> []
    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 * 
 * 10) Sizga raqamlardan iborat satr beriladi, siz 5 dan kichik bo‘lgan har qanday raqamni '0' bilan, 5 yoki undan katta bo‘lgan raqamni esa '1' bilan almashtirishingiz kerak. Natijaviy satrni qaytaring.
*/