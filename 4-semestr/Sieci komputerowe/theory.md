# Sieci komputerowe

# Ethernet network cables in LAN

> Link: [Video tutorial](https://www.youtube.com/watch?v=_NX99ad2FUA&t=82s&ab_channel=PowerCertAnimatedVideos)

Cables that can be found connected to your computer, router.

There are two types of such cables:

1) `UTP` [unshielded twisted pair] - common type of cable that is used today.

    ![alt text](./img/image.png)

It consists of 4 pairs of colored-coded wires twisted around each other.

The wire are twisted to prevent electromagnetic interference.

2) `STP` [shielded twisted pair] - it is much the same thing as `UTP`, but it has a `foil shield` that covers the wires.

    ![alt text](./img/image-1.png)

The foil shield adds a layer of protection against electromagnetic interference leaking into and out of the cables.

## The wire order in RJ45 connector.

![RJ45 connector image](./img/image-2.png)

The wire order is very important and that order will be different depending upon purpose of the cables.

There are two standards of twisted pair cable: `T568A` & `T568A` - they are the same, just with different wire order.

![alt text](./img/image-3.png)

The most common types of twisted pair cables that are used today a LAN:

1) `Straight(patch) cable` - when both ends of a cable are wired using __the same__ standard. For example: both ends are `T568A`. The most common type of ethernet cable that's used on a LAN. They are used tto connect computer with hubs, switches, routers, or modems. `Connects dissimilar devices together`. .

    ![alt text](./img/image-4.png)

1) `Crossover cable` - when both ends of a cable are wired using two different standards. For example: one ends `T568A` and other one `T568B`. They are used to connect two similar devices together. For example: two computers

    ![alt text](./img/image-5.png)

## Categories (CAT)

Those wires can be different categories and differ from each other by speed. Categories 4 and 5 are no longer standard, but from 5e cables are a standard.

![alt text](./img/image-6.png)

> There are also category 8, its speed 40Gbps.

# Światłowód

![Światłowód](./img/światłowód_1.png)

![Światłowód 2](./img/światłowód_2.png)

## 1. Światłowód - podstawowe informacje

Światłowód to przewód zbudowany z włókna szklanego lub plastikowego, w którym sygnał jest przesyłany w postaci światła. Jego główne zalety to:

- ✅ Bardzo wysoka prędkość transmisji danych

    Najczęściej w zakresie sieci światłowodowej oferowanych przez polskich operatorów są to następujące przedziały: 

    - prędkość pobierania do `300 Mb/s`, prędkość wysyłania do `50 Mb/s`
    - prędkość pobierania do `600 Mb/s`, prędkość wysyłania do `100 Mb/s`
    - prędkość pobierania do `1GB/s`, prędkość wysyłania do `300 Mb/s`

- ✅ Niski poziom zakłóceń elektromagnetycznych
- ✅ Duża odległość transmisji bez utraty jakości

    ![Światłowód 3](./img/światłowód_3.png)

## 2. Rodzaje montażu światłowodu

- `W ziemi` - światłowód zakopany w specjalnych osłonach lub rurach ochronnych. Chroni go to przed warunkami atmosferycznymi i uszkodzeniami mechanicznymi

    ![W ziemi](./img/w_ziemi.png)

- `Napowietrzny` - zawieszony na słupach, podobnie jak kable elektryczne. Jest tańszy w instalacji, ale bardziej narażony na uszkodzenia (np. silny wiatr, burze)

    ![napowietrzny](./img/napowietrzny.png)

## 3. Zasięg i prędkość transmisji

Światłowody pozwalają na przesyłanie danych na ogromne odległości:

- 📌 `Zasięg`: od kilkunastu kilometrów do tysięcy kilometrów (np. światłowody podmorskie)
- 📌 `Prędkość transmisji`: od 1 Gb/s do nawet 1 Pb/s (petabit na sekundę) w nowoczesnych laboratoriach
- 📌 `Tłumienie sygnału`: standardowy światłowód traci około 0,2 dB/km przy długości fali 1550 nm

## 4. Budowa światłowodu

Światłowód składa się z kilku warstw:

- 🔹 `Rdzeń` - najważniejsza część, wykonana z czystego szkła lub plastiku, gdzie przemieszcza się światło
- 🔹 `Płaszcz optyczny` - warstwa odbijająca światło do rdzenia (zapewnia efekt całkowitego wewnętrznego odbicia)
- 🔹 `Osłona ochronna` - chroni światłowód przed uszkodzeniami mechanicznymi i wilgocią

    ![Budowa światłowodu](./img/budowa_światłowodu.png)

    ![Budowa światłowodu 2](./img/budowa_światłowodu_2.png)

    ![Budowa światłowodu 3](./img/budowa_światłowodu_3.png)

## 5. Rodzaje światłowodów

- 🔸 Jednomodowy (SM - Single Mode)
    - ✔ Bardzo mała średnica rdzenia (ok. 9 µm)
    - ✔ Transmisja na bardzo duże odległości (ponad 100 km)
    - ✔ Wysoka przepustowość i mniejsze tłumienie

    ![jednomodowy](./img/jednomodowy.png)

- 🔸 Wielomodowy (MM - Multi Mode)
    - ✔ Większa średnica rdzenia (50-62,5 µm)
    - ✔ Krótszy zasięg (kilka km)
    - ✔ Tańszy w produkcji i instalacji

    ![jednomodowy_wielomodowy](./img/jednomodowy_wielomodowy.png)

## 6. Światłowody oceaniczne

- 🔵 Podmorskie kable światłowodowe łączą kontynenty, zapewniając globalny dostęp do Internetu.
- 🔵 Są one układane na dnie oceanicznym przez specjalistyczne statki.
- 🔵 Długość tych kabli może wynosić nawet 40 000 km (np. kabel SEA-ME-WE 3).
- 🔵 Mają dodatkowe osłony przed ciśnieniem wody i uszkodzeniami mechanicznymi.

    ![światłowody_oceaniczne](./img/światłowody_oceaniczne.png)

## 7. Zabezpieczenia światłowodu w ziemi

Światłowody zakopane w gruncie muszą być zabezpieczone przed:

- 🐀 `Gryzoniami` - stosuje się dodatkowe metalowe osłony lub specjalne powłoki chemiczne odstraszające zwierzęta.
- 🚜 `Uszkodzeniami mechanicznymi` - światłowody często umieszcza się w ochronnych rurach PCV.
- 💧 `Wilgocią` - stosuje się żele hydrofobowe, które zapobiegają dostaniu się wody do rdzenia kabla.

    ![Zabezpieczenia światłowodu w ziemi](./img/zabezpieczenia_światłowodu_w_ziemi.png)