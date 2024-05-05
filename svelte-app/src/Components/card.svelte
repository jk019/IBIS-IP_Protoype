<script>
    export let IP = "";
    export let device = [];
    export let current_service = "";
    export let handleServiceClick;

</script>



<div
    class="dropdown-menu position-static d-flex flex-column flex-lg-row align-items-stretch justify-content-start p-3 rounded-3 shadow-lg main-content"
    data-bs-theme="light"
>
    <nav class="col-lg-5">
        <ul class="list-unstyled d-flex flex-column gap-2">
            <li>
                <a
                    class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                >
                    <img src="../images/devices.svg" alt="Devices" />
                    <div>
                        <strong class="d-block">Device: {IP}</strong>
                    </div>
                </a>
            </li>
            <li>
                <a
                    class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                    data-bs-toggle="collapse"
                    href="#collapse{IP}"
                    aria-expanded="false"
                    aria-controls="collapse"
                >
                    <img src="../images/services.png" alt="Devices" />
                    <div>
                        <strong class="d-block">Services</strong>
                        <small>click, for overview</small>
                    </div>
                </a>
            </li>
        </ul>
    </nav>

    <div class="d-none d-lg-block vr mx-4 opacity-10" id="collapse{IP}">
        &nbsp;
    </div>
    <hr class="d-lg-none" />

    <div class="collapse collapse-horizontal" id="collapse{IP}">
        <div class="col-lg-auto pe-3">
            <nav>
                <ul class="d-flex flex-column gap-2 list-unstyled small">
                    {#each device.services as service}
                        <button
                            class="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse{current_service}"
                            aria-expanded="false"
                            aria-controls="collapse{current_service}"
                            on:click={() => handleServiceClick(service.name, IP, service.port, service.path)}
                            data-bs-parent="#accordionExample"
                        >
                            {service.name} {service.port}
                        </button>
                    {/each}
                </ul>
            </nav>
        </div>
    </div>
</div>

<style>
    .main-content {
        width: 100%;
        margin-top: 10px;
        margin: 30px;
    }

    .btn {
        margin: 5px;
        background-color: white;
        color: black;
        white-space: normal;
        overflow-wrap: break-word; /* Add this line */
        word-break: break-word; /* Add this line */
    }

    .btn-hover-light {
        --docsearch-primary-color: #5468ff;
        --docsearch-text-color: #1c1e21;
        --docsearch-spacing: 12px;
        --docsearch-icon-stroke-width: 1.4;
        --docsearch-highlight-color: var(--docsearch-primary-color);
        --docsearch-muted-color: #969faf;
        --docsearch-container-background: rgba(101, 108, 133, 0.8);
        --docsearch-logo-color: #5468ff;
        --docsearch-modal-width: 560px;
        --docsearch-modal-height: 600px;
        --docsearch-modal-background: #f5f6f7;
        --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5),
            0 3px 8px 0 #555a64;
        --docsearch-searchbox-height: 56px;
        --docsearch-searchbox-background: #ebedf0;
        --docsearch-searchbox-focus-background: #fff;
        --docsearch-searchbox-shadow: inset 0 0 0 2px
            var(--docsearch-primary-color);
        --docsearch-hit-height: 56px;
        --docsearch-hit-color: #444950;
        --docsearch-hit-active-color: #fff;
        --docsearch-hit-background: #fff;
        --docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;
        --docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
        --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
            0 1px 2px 1px rgba(30, 35, 90, 0.4);
        --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #cdcde6,
            inset 0 0 1px 1px #fff, 0 1px 1px 0 rgba(30, 35, 90, 0.4);
        --docsearch-footer-height: 44px;
        --docsearch-footer-background: #fff;
        --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,
            0 -3px 6px 0 rgba(69, 98, 155, 0.12);
        --bs-breakpoint-xs: 0;
        --bs-breakpoint-sm: 576px;
        --bs-breakpoint-md: 768px;
        --bs-breakpoint-lg: 992px;
        --bs-breakpoint-xl: 1200px;
        --bs-breakpoint-xxl: 1400px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        --bs-blue: #0d6efd;
        --bs-indigo: #6610f2;
        --bs-purple: #6f42c1;
        --bs-pink: #d63384;
        --bs-red: #dc3545;
        --bs-orange: #fd7e14;
        --bs-yellow: #ffc107;
        --bs-green: #198754;
        --bs-teal: #20c997;
        --bs-cyan: #0dcaf0;
        --bs-black: #000;
        --bs-white: #fff;
        --bs-gray: #6c757d;
        --bs-gray-dark: #343a40;
        --bs-gray-100: #f8f9fa;
        --bs-gray-200: #e9ecef;
        --bs-gray-300: #dee2e6;
        --bs-gray-400: #ced4da;
        --bs-gray-500: #adb5bd;
        --bs-gray-600: #6c757d;
        --bs-gray-700: #495057;
        --bs-gray-800: #343a40;
        --bs-gray-900: #212529;
        --bs-primary: #0d6efd;
        --bs-secondary: #6c757d;
        --bs-success: #198754;
        --bs-info: #0dcaf0;
        --bs-warning: #ffc107;
        --bs-danger: #dc3545;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
        --bs-primary-rgb: 13, 110, 253;
        --bs-secondary-rgb: 108, 117, 125;
        --bs-success-rgb: 25, 135, 84;
        --bs-info-rgb: 13, 202, 240;
        --bs-warning-rgb: 255, 193, 7;
        --bs-danger-rgb: 220, 53, 69;
        --bs-light-rgb: 248, 249, 250;
        --bs-dark-rgb: 33, 37, 41;
        --bs-primary-text-emphasis: #052c65;
        --bs-secondary-text-emphasis: #2b2f32;
        --bs-success-text-emphasis: #0a3622;
        --bs-info-text-emphasis: #055160;
        --bs-warning-text-emphasis: #664d03;
        --bs-danger-text-emphasis: #58151c;
        --bs-light-text-emphasis: #495057;
        --bs-dark-text-emphasis: #495057;
        --bs-primary-bg-subtle: #cfe2ff;
        --bs-secondary-bg-subtle: #e2e3e5;
        --bs-success-bg-subtle: #d1e7dd;
        --bs-info-bg-subtle: #cff4fc;
        --bs-warning-bg-subtle: #fff3cd;
        --bs-danger-bg-subtle: #f8d7da;
        --bs-light-bg-subtle: #fcfcfd;
        --bs-dark-bg-subtle: #ced4da;
        --bs-primary-border-subtle: #gray;
        --bs-secondary-border-subtle: #c4c8cb;
        --bs-success-border-subtle: #a3cfbb;
        --bs-info-border-subtle: #9eeaf9;
        --bs-warning-border-subtle: #ffe69c;
        --bs-danger-border-subtle: #f1aeb5;
        --bs-light-border-subtle: #e9ecef;
        --bs-dark-border-subtle: #adb5bd;
        --bs-white-rgb: 255, 255, 255;
        --bs-black-rgb: 0, 0, 0;
        --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        --bs-gradient: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0)
        );
        --bs-body-font-family: var(--bs-font-sans-serif);
        --bs-body-font-size: 1rem;
        --bs-body-font-weight: 400;
        --bs-body-line-height: 1.5;
        --bs-body-color: #212529;
        --bs-body-color-rgb: 33, 37, 41;
        --bs-body-bg: #fff;
        --bs-body-bg-rgb: 255, 255, 255;
        --bs-emphasis-color: #000;
        --bs-emphasis-color-rgb: 0, 0, 0;
        --bs-secondary-color: rgba(33, 37, 41, 0.75);
        --bs-secondary-color-rgb: 33, 37, 41;
        --bs-secondary-bg: #e9ecef;
        --bs-secondary-bg-rgb: 233, 236, 239;
        --bs-tertiary-color: rgba(33, 37, 41, 0.5);
        --bs-tertiary-color-rgb: 33, 37, 41;
        --bs-tertiary-bg: #f8f9fa;
        --bs-tertiary-bg-rgb: 248, 249, 250;
        --bs-heading-color: inherit;
        --bs-link-color: #0d6efd;
        --bs-link-color-rgb: 13, 110, 253;
        --bs-link-decoration: underline;
        --bs-link-hover-color: #0a58ca;
        --bs-link-hover-color-rgb: 10, 88, 202;
        --bs-code-color: #d63384;
        --bs-highlight-color: #212529;
        --bs-highlight-bg: #fff3cd;
        --bs-border-width: 1px;
        --bs-border-style: solid;
        --bs-border-color: #dee2e6;
        --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
        --bs-border-radius: 0.375rem;
        --bs-border-radius-sm: 0.25rem;
        --bs-border-radius-lg: 0.5rem;
        --bs-border-radius-xl: 1rem;
        --bs-border-radius-xxl: 2rem;
        --bs-border-radius-2xl: var(--bs-border-radius-xxl);
        --bs-border-radius-pill: 50rem;
        --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
        --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
        --bs-focus-ring-width: 0.25rem;
        --bs-focus-ring-opacity: 0.25;
        --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
        --bs-form-valid-color: #198754;
        --bs-form-valid-border-color: #198754;
        --bs-form-invalid-color: #dc3545;
        --bs-form-invalid-border-color: #dc3545;
        --bs-dropdown-zindex: 1000;
        --bs-dropdown-min-width: 10rem;
        --bs-dropdown-padding-x: 0;
        --bs-dropdown-padding-y: 0.5rem;
        --bs-dropdown-spacer: 0.125rem;
        --bs-dropdown-font-size: 1rem;
        --bs-dropdown-color: var(--bs-body-color);
        --bs-dropdown-bg: var(--bs-body-bg);
        --bs-dropdown-border-color: var(--bs-border-color-translucent);
        --bs-dropdown-border-radius: var(--bs-border-radius);
        --bs-dropdown-border-width: var(--bs-border-width);
        --bs-dropdown-inner-border-radius: calc(
            var(--bs-border-radius) - var(--bs-border-width)
        );
        --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
        --bs-dropdown-divider-margin-y: 0.5rem;
        --bs-dropdown-box-shadow: var(--bs-box-shadow);
        --bs-dropdown-link-color: var(--bs-body-color);
        --bs-dropdown-link-hover-color: var(--bs-body-color);
        --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
        --bs-dropdown-link-active-color: #fff;
        --bs-dropdown-link-active-bg: #0d6efd;
        --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
        --bs-dropdown-item-padding-x: 1rem;
        --bs-dropdown-item-padding-y: 0.25rem;
        --bs-dropdown-header-color: #6c757d;
        --bs-dropdown-header-padding-x: 1rem;
        --bs-dropdown-header-padding-y: 0.5rem;
        list-style: none;
        box-sizing: border-box;
        --bs-btn-padding-x: 0.75rem;
        --bs-btn-padding-y: 0.375rem;
        --bs-btn-font-family: ;
        --bs-btn-font-size: 1rem;
        --bs-btn-font-weight: 400;
        --bs-btn-line-height: 1.5;
        --bs-btn-color: var(--bs-body-color);
        --bs-btn-bg: transparent;
        --bs-btn-border-width: var(--bs-border-width);
        --bs-btn-border-color: transparent;
        --bs-btn-border-radius: var(--bs-border-radius);
        --bs-btn-hover-border-color: transparent;
        --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 1px 1px rgba(0, 0, 0, 0.075);
        --bs-btn-disabled-opacity: 0.65;
        --bs-btn-focus-box-shadow: 0 0 0 0.25rem
            rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
        font-family: var(--bs-btn-font-family);
        font-size: var(--bs-btn-font-size);
        font-weight: var(--bs-btn-font-weight);
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
        transition:
            color 0.15s ease-in-out,
            background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        display: flex !important;
        align-items: flex-start !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
        gap: 0.5rem !important;
        line-height: 1.25 !important;
        text-align: left !important;
        border-radius: var(--bs-border-radius) !important;
        color: var(--bs-body-color);
        background-color: var(--bs-body-bg);
    }

    .btn:hover {
        background-color: #e2e6ea; /* Dunkleren Hintergrund beim Hover setzen */
    }

    .btn small {
        color: #6c757d; /* Farbe für den Beschreibungstext setzen */
    }

    /* Layout für große Bildschirme */
    @media (min-width: 992px) {
        .dropdown-menu {
            display: flex; /* Flexbox-Layout für das Dropdown-Menü verwenden */
        }

        .vr {
            border-color: #dee2e6; /* Farbe des vertikalen Trennstrichs setzen */
        }
    }
</style>
