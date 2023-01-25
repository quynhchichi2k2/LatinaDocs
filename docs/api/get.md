<script>
export default {
    data() {
        return {
            vpnList: ["vmess", "vless", "trojan", "ssr"],
            formatList: ["clash", "surfboard", "singbox", "raw"],
            regionList: ["Asia", "Americas", "Europe", "Africa"],
            networkList: ["http", "ws", "grpc"]
        }
    }
}
</script>

# Pengenalan Singkat

Endpoint ini digunakan untuk mengambil akun VPN

## Tabel Kueri

| Key     | Penjelasan                          | Default | Multiple | Contoh        | Pilihan                                                                                                                                      |
| :------ | :---------------------------------- | :-----: | :------: | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| vpn     | Pilih VPN bersadarkan protokol      |  vmess  |    No    | ?vpn=vmess    | <details><summary>Buka</summary><ul><li v-for="i in vpnList">{{ i }}</li></ul></details>                                                     |
| format  | Pilih format                        |  clash  |    No    | &format=clash | <details><summary>Buka</summary><ul><li v-for="i in formatList">{{ i }}</li></ul></details>                                                  |
| region  | Pilih VPN berdasarkan wilayah       |         |    No    | &region=Asia  | <details><summary>Buka</summary><ul><li v-for="i in regionList">{{ i }}</li></ul></details>                                                  |
| cc      | Pilih VPN berdasarkan kode negara   |         |    No    | &cc=SG        | <details><summary>Buka</summary><a href="https://raw.githubusercontent.com/LalatinaHub/LatinaSub/main/countries.json">Get List</a></details> |
| remark  | Pilih VPN berdasarkan nama          |         |    No    | &remark=melbi |
| tls     | Pilih VPN TLS atau NTLS             |         |    No    | &tls=1        |
| network | Pilih VPN berdasarkan tipe jaringan |         |    No    | &network=ws   | <details><summary>Buka</summary><ul><li v-for="i in networkList">{{ i }}</li></ul></details>                                                 |
| sni     | Isi VPN dengan host SNI             |         |   Yes    | &sni=sni.host |
| cdn     | Isi VPN dengan host CDN             |         |   Yes    | &cdn=cdn.host |
| dl      | Unduh                               |         |    No    | &dl=1         |

::: info
Key yang mendukung unput lebih dari 1 (Multiple), dipisahkan menggunakan tanda koma (,)  
Contoh: https://fool.azurewebsites.net/get?cdn=host1,host2,host3
:::
