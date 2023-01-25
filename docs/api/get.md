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

# Quick Introduction

This endpoint used to get vpn accounts

# Queries Table

| Key     | Explanation                | Default | Multiple | Example       | Available Option                                                                                                                             |
| :------ | :------------------------- | :-----: | :------: | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| vpn     | Select VPN by protocol     |  vmess  |    No    | ?vpn=vmess    | <details><summary>Open</summary><ul><li v-for="i in vpnList">{{ i }}</li></ul></details>                                                     |
| format  | Select output format       |  clash  |    No    | &format=clash | <details><summary>Open</summary><ul><li v-for="i in formatList">{{ i }}</li></ul></details>                                                  |
| region  | Select VPN by region       |         |    No    | &region=Asia  | <details><summary>Open</summary><ul><li v-for="i in regionList">{{ i }}</li></ul></details>                                                  |
| cc      | Select VPN by Country Code |         |    No    | &cc=SG        | <details><summary>Open</summary><a href="https://raw.githubusercontent.com/LalatinaHub/LatinaSub/main/countries.json">Get List</a></details> |
| remark  | Select VPN by name         |         |    No    | &remark=melbi |
| tls     | Select TLS or NTLS VPN     |         |    No    | &tls=1        |
| network | Select VPN by network      |         |    No    | &network=ws   | <details><summary>Open</summary><ul><li v-for="i in networkList">{{ i }}</li></ul></details>                                                 |
| sni     | Fill vpn with SNI host     |         |   Yes    | &sni=sni.host |
| cdn     | Fill vpn with CDN host     |         |   Yes    | &cdn=cdn.host |
| dl      | Download                   |         |    No    | &dl=1         |

::: info
Multiple input is separated with coma (,)  
Example: https://fool.azurewebsites.net/get?cdn=host1,host2,host3
:::
