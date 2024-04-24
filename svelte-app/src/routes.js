import Home from './Home.svelte';
import Services from './Services.svelte';
import Devices from './Devices.svelte';
import DevicesMDNS from './DevicesMDNS.svelte';
import Testing from './Testing.svelte';
import Testing2 from './Testing2.svelte';
import Backup from './Backup.svelte';


export default {

    "/": Home,

    "/services": Services,

    "/devices": Devices,

    "/devicesmdns":    DevicesMDNS,

    "/testing": Testing,

    "/testing2": Testing2,

    "/backup": Backup,
};