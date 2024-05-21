<script>
    export let deviceInfo = {};
</script>

<div>
    <h1>DeviceManagementService</h1>
    <p>
        The DeviceManagementService describes basic information about a device.
    </p>
    <div><b>device name: </b> {deviceInfo.deviceName}</div>
    <div><b>manufacturer: </b>{deviceInfo.manufacturer}</div>
    <div><b>device class: </b>{deviceInfo.deviceClass}</div>
    <div><b>serial number: </b>{deviceInfo.serialNumber}</div>
    <div><b>timestamp: </b>{deviceInfo.timeStamp}</div>
</div>
