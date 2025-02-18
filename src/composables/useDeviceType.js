import { ref, onMounted } from "vue";

export function useDeviceType() {
    const deviceType = ref("");

    const detectDevice = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            deviceType.value = "https://play.google.com/store/search?q=imkaan+taxi&c=apps";
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            deviceType.value = "https://apps.apple.com/uz/app/imkaan-driver/id6475028299";
        } else {
            deviceType.value = "https://play.google.com/store/search?q=imkaan+taxi&c=apps";
        }
    };

    onMounted(() => {
        detectDevice();
    });

    return { deviceType };
}