# Pre-information

There are two main models of Computer Network: [**OSI/ISO**](https://en.wikipedia.org/wiki/OSI_model) and [**TCP/IP**](https://en.wikipedia.org/wiki/Internet_protocol_suite).

**OSI/ISO** - is the oldest model and is not utilized nowadays. It is reference model.

**TCP/IP** - is reconsidered **OSI/ISO** model and is utilized nowadays.

| Abbreviation (skróty)                                                                       | Definition (znaczenie)                                                                                                                      |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [**ISO**](https://en.wikipedia.org/wiki/OSI_model)                                          | International Standardization Organization                                                                                                  |
| [**IEEE**](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers) | Institutes of Electronics and Electrical Engineers (**802** is in charge of standardization of local networks)                              |
| [**IETF**](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force)                   | Internet Engineering Task Force (for **TCP/IP**)                                                                                            |
| [**TIA/EIA-568-B**](https://en.wikipedia.org/wiki/ANSI/TIA-568)                             | Telecommunications Industry Association / Electronic Industries Alliance ( is in charge of **T568A** and **T568B** and cabling in general)  |
| [**ANSI**](https://en.wikipedia.org/wiki/American_National_Standards_Institute)             | American National Standards Institute                                                                                                       |
| [**ITU-T**](https://en.wikipedia.org/wiki/ITU-T)                                            | International Telecommunication Union Telecommunication Standardization Sector ([X.509](https://en.wikipedia.org/wiki/X.509) - **TLS/SSL**) |

**RFC** - request for comments ([rfc-editor](https://www.rfc-editor.org/)):

- The official document that describes The Network Standards.
- Primary pro document.
- It is observed by **IETF**.
- Numbering: from 1 to ... (e.g. RFC 1, RFC 3550, RFC 7465).
- Next versions cancel previous versions.

[**Protocol**](https://www.techtarget.com/searchnetworking/definition/protocol) - {syntaxes, exchange rules}. A network protocol is a set of established rules that specify how to format, send...

- All layers are independent from others.
- All layers of one system are communication with the same layer of other system (peer-to-peer) (windows - transportation <-> MAC\OS X - transportation). But they can have totally different implementations as long as requirements behavior of protocol is the same.

[**peer-to-peer**](https://en.wikipedia.org/wiki/Peer-to-peer) - decentralized communications model in which each party has the same capabilities and either party can initiate a communication session.

[**protocol data unit (PDU)**](https://en.wikipedia.org/wiki/Protocol_data_unit) - is a single unit of information transmitted among peer entities of a computer network. It is composed of protocol-specific control information and user data. In the layered architectures of communication protocol stacks, each layer implements protocols tailored to the specific type or mode of data exchange. For example, the Transmission Control Protocol (TCP) implements a connection-oriented transfer mode, and the PDU of this protocol is called a segment, while the User Datagram Protocol (UDP) uses datagrams as protocol data units for connectionless communication. A layer lower in the Internet protocol suite, at the Internet layer, the PDU is called a packet, irrespective of its payload type.

**PDU** consists of:

- **header** (nagłówek)
- **payload** (pole danych)
- **trailer** (zakonczenie ramki)

**PDU** of N + 1 layer is **encapsulated** to N layer.

**decapsulation proces**:

- the sending side performs the encapsulation process
- the receiving side must know how to interpret the data field of each layer.:
  - **TYPE** field in **Ethernet**.
  - **PROTOCOL** field in **IP**.
  - **PORT NUMBER** field in **UDP datagram** or **TCP segment**.

# [**OSI/ISO**](https://en.wikipedia.org/wiki/OSI_model) Layer architecture

The recommendation X.200 describes seven layers, labelled 1 to 7. Layer 1 is the lowest layer in this model.

| №   | Layer                                                            | [Protocol data unit](https://en.wikipedia.org/wiki/Protocol_data_unit) (PDU)                                        | Function                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | [Physical](https://en.wikipedia.org/wiki/Physical_layer)         | [Bit](https://en.wikipedia.org/wiki/Bit), [Symbol](https://en.wikipedia.org/wiki/Symbol_rate#Symbols)               | Responsible for transmission and reception of raw bit streams over physical medium (nośnik, носій). Transmit ra bit stream over the physical medium.                                                                           |
| 2   | [Data link](https://en.wikipedia.org/wiki/Data_link_layer)       | [Frame](<https://en.wikipedia.org/wiki/Frame_(networking)>) (ramka)                                                 | Transmission of data frames between two nodes connected by a physical layer. Defines the format of data on the network.                                                                                                        |
| 3   | [Network](https://en.wikipedia.org/wiki/Network_layer)           | [Packet](https://en.wikipedia.org/wiki/Network_packet) (pakiet), [Datagram](https://en.wikipedia.org/wiki/Datagram) | Structuring and managing a multi-node network, including addressing, routing and traffic control. Decides which physical path the data will take.                                                                              |
| 4   | [Transport](https://en.wikipedia.org/wiki/Transport_layer)       | [Segment](https://en.wikipedia.org/wiki/Packet_segmentation)                                                        | Reliable transmission of data segments between points on a network, including segmentation, acknowledgement and multiplexing. Transmits data using transmission protocols including TCP and UDP.                               |
| 5   | [Session](https://en.wikipedia.org/wiki/Session_layer)           | [Data](<https://en.wikipedia.org/wiki/Data_(computing)>)                                                            | Managing communication sessions, i.e., continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes. Maintains connections and is responsible for controlling ports and sessions. |
| 6   | [Presentation](https://en.wikipedia.org/wiki/Presentation_layer) | [Data](<https://en.wikipedia.org/wiki/Data_(computing)>)                                                            | Translation of data between a networking service and an application; including character encoding, data compression and encryption/decryption. Ensures that data is in a useable format and is where data encryption occurs.   |
| 7   | [Application](https://en.wikipedia.org/wiki/Application_layer)   | [Data](<https://en.wikipedia.org/wiki/Data_(computing)>)                                                            | High-level protocols such as for resource sharing or remote file access, e.g. HTTP. Human-computer interaction layer, where applications can access the network services.                                                      |

Computer network separation:

- [**WAN**](https://www.cloudflare.com/learning/network-layer/what-is-a-wan/) (Wide Area Network) (Sieci rozległe) - connect local networks, for example global network Internet.
- [**MAN**](https://www.cloudflare.com/learning/network-layer/what-is-a-metropolitan-area-network/) (Metropolitan Area Network) (Sieci miejskie).
- [**LAN**](https://www.cloudflare.com/learning/network-layer/what-is-a-lan/) (Local Area Network) (Sieci lokalne).
- [**PAN**](https://en.wikipedia.org/wiki/Personal_area_network) (Personal Area Network) / [**BAN**](https://en.wikipedia.org/wiki/Body_area_network) (Body Area Network) (Sieci personalne).

**Equipment** used in each layer:

1. [Physical](https://en.wikipedia.org/wiki/Physical_layer) - [**hub**](https://www.geeksforgeeks.org/computer-networks/what-is-network-hub-and-how-it-works/), [**repeater**](https://www.geeksforgeeks.org/computer-networks/repeaters-in-computer-network/) (regenerator sygnału).
2. [Data link](https://en.wikipedia.org/wiki/Data_link_layer) - [**switch**](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/), [**bridge**](https://en.wikipedia.org/wiki/Network_bridge) (mostek).
2. [Network](https://en.wikipedia.org/wiki/Network_layer) - [**router**](https://www.cloudflare.com/learning/network-layer/what-is-a-router/).

# 1. Physical

...

# 2. Data link

...

# 3. Network

```
A: 1.0.0.0 - 9.255.255.255 | 1-9

A private: 10.0.0.0 - 10.255.255.255 | 10-10

A: 11.0.0.0 - 126.255.255.255 | 11-126
```

```
Loopback: 127.0.0.0 - 127.255.255.255 | 127-127
```

```
B: 128.0.0.0 - 172.15.255.255 | 128-172.15

B private: 172.16.0.0 - 172.31.255.255 |

B: 172.32.0.0 - 191.255.255.255
```

```
C: 192.0.0.0 - 192.167.255.255

C private: 192.168.0.0 - 192.168.255.255

C: 192.169.0.0 - 224.255.255.255
```

# IPv4 adres classes

[The Five IPv4 Classes - Quick Reference](https://www.meridianoutpost.com/resources/articles/IP-classes.php)

There are 5 (**A**, **B**, **C**, **D**, **E**) classes in the IPv4 which determine ultimate number of devices you can have on your network.

| Primary             | Special      |
| ------------------- | ------------ |
| **A**, **B**, **C** | **D**, **E** |

## **Class A**

**Class A** is for networks with large numbers of total hosts (devices).

**Class A** allows for **126 networks** by using the first octet for the network ID. <span style="text-decoration: underline;">The first bit</span> in this octet is **always** 0. The remaining 7 bits are for networks.

The 24 bits in the remaining three octets represent the hosts ID and allows for approximately **17 million hosts per network**.

**Class A** network number values begin at **1** and end **127**.

- **Public IP Range**: <span style="color: #EC5766;">1.0.0.0</span> to <span style="color: #EC5766;">126.255.255.255</span>
- **Private IP Range**: <span style="color: #EC5766;">10.0.0.0</span> to <span style="color: #EC5766;">10.255.255.255</span>
- **Subnet Mask**: <span style="color: #EC5766;">255.0.0.0</span> (8 bits)
- **Number of Networks**: 126
- **Number of Hosts per Network**: 16 777 214

**Class A** IP address ranges are typically used internet service providers and large corporations - such as Google and Aple.

## **Class B**

**Class B** are for medium to large sized networks.

**Class B** allows for **16,384 networks** by using the first two octets for the network ID. <span style="text-decoration: underline;">The first two bits</span> in this octet are **always** 1 0. The remaining 6 bits are for networks.

The 16 bits in the remaining two octets represent the hosts ID and allows for approximately **65 000 million hosts per network**.

**Class B** network number values begin at **128** and end **191**.

- **Public IP Range**: <span style="color: #EC5766;">128.0.0.0</span> to <span style="color: #EC5766;">191.255.255.255</span>
- **Private IP Range**: <span style="color: #EC5766;">172.16.0.0</span> to <span style="color: #EC5766;">172.31.255.255</span>
- **Subnet Mask**: <span style="color: #EC5766;">255.255.0.0</span> (16 bits)
- **Number of Networks**: 16,382
- **Number of Hosts per Network**: 65,534

**Class B** IP address ranges are typically used by universities and medium-sized businesses.

## **Class C**

**Class C** are used in small local area networks (LANs).

**Class C** allows for **2 million networks** by using the first three octets for the network ID. <span style="text-decoration: underline;">The first three bits</span> in this octet are **always** 1 1 0. The remaining 21 bits are for networks.

The 8 bits in the remaining octet represent the hosts ID and allows for **254 hosts per network**.

**Class C** network number values begin at **192** and end **223**.

- **Public IP Range**: <span style="color: #EC5766;">192.0.0.0</span> to <span style="color: #EC5766;">223.255.255.255</span>
- **Private IP Range**: <span style="color: #EC5766;">192.168.0.0</span> to <span style="color: #EC5766;">192.168.255.255</span>
- **Special IP Range**: <span style="color: #EC5766;">127.0.0.1</span> to <span style="color: #EC5766;">127.255.255.255</span>
- **Subnet Mask**: <span style="color: #EC5766;">255.255.255.0</span> (24 bits)
- **Number of Networks**: 2,097,150
- **Number of Hosts per Network**: 254

**Class C** IP address ranges are typically used by small businesses and home networks.

## **Class D**

**Class D** are not for allocated to hosts and are used for multicasting.

Multicasting allows for a single user to send a single stream of data to thousands of hosts across the Internet at the same time.

It is often used for audio and video streaming, such as IP-based cable, TV networks, real-time stock-market.

- **Range**: <span style="color: #EC5766;">224.0.0.0</span> to <span style="color: #EC5766;">239.255.255.255</span>.
- **Number of Networks**: N/A.
- **Number of Hosts per Network**: Multicasting.

**Class D** IP address ranges are typically used in multicast streaming services (e.g., video conferencing). Unlike **Class A**, **B**, and **C**, IPs in this class are not 'owned' by a specific entity. They are instead used temporarily and within an enterprise network for streaming content to multiple recipients simultaneously over their networks. For example, Zoom Communication uses **Class D** addresses for internal webinars or live video broadcast or a financial firm using it to deliver real-time stock market data to their customers.

## **Class E**

**Class D** are for research purpose, tests.

Multicasting allows for a single user to send a single stream of data to thousands of hosts across the Internet at the same time.

It is often used for audio and video streaming, such as IP-based cable, TV networks, real-time stock-market.

- **Range**: <span style="color: #EC5766;">240.0.0.0</span> to <span style="color: #EC5766;">254.255.255.255</span>.
- **Number of Networks**: N/A.
- **Number of Hosts per Network**: Research/Reserved/Experimental.

**Class E** IP address ranges are reserved and are not publicly used.

# Practical knowledge

## Distinguish IPv4 adres class
