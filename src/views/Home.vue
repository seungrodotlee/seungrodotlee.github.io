<template>
  <div
    class="flex-col flex-center w-full h-full transition"
    :class="[faded ? 'blur-3xl opacity-0' : '', `duration-[${fadeDuration}s]`]"
  >
    <div class="flex-col relative">
      <main-logo class="h-48" />
      <p ref="logoSubText" class="absolute bottom-4 right-0"></p>
    </div>
    <div class="option-box text-center abs-center-x bottom-16">
      <p class="mb-1">
        제 소개가 좀 시끄러울 수 있어요. 소리를
        <button
          class="button gradiented positive ml-2"
          :class="{ selected: sound }"
          @click="setSound(true)"
        >
          켤까요?
        </button>
        <button
          class="button gradiented negative ml-3"
          :class="{ selected: sound === false }"
          @click="setSound(false)"
        >
          끌까요?
        </button>
      </p>
      <p class="mb-1">
        제 소개에는 인트로가 있어요. 인트로는
        <button
          class="button gradiented positive mx-2"
          :class="{ selected: intro === 'A' }"
          @click="setIntro('A')"
        >
          자동으로 재생
        </button>
        할 수도 있고, 스크롤 혹은 방향키를 누르며
        <button
          class="button gradiented concern mx-2"
          :class="{ selected: intro === 'S' }"
          @click="setIntro('S')"
        >
          직접 재생
        </button>
        할 수도 있어요.
      </p>
      <p>
        아니면...
        <button
          class="button gradiented negative mx-2"
          :class="{ selected: intro === 'N' }"
          @click="setIntro('N')"
        >
          인트로를 생략
        </button>
        할 수도 있어요..!
      </p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import Geul from "geul";

import { sleep } from "../composables/useUtilities";

import MainLogo from "../components/MainLogo.vue";

export default {
  components: {
    MainLogo,
  },
  setup() {
    const router = useRouter();

    const logoSubText = ref(null);

    watch(logoSubText, async (to) => {
      const subTextTyping = new Geul("개발자", to, 50);

      await sleep(1000);

      subTextTyping.run();

      await sleep(1000);

      subTextTyping.add(" | 디자인에 관심이 있음");
    });

    const sound = ref(null);
    const setSound = (param) => {
      sound.value = param;

      if (intro.value !== null) {
        escapePage();
      }
    };

    const intro = ref(null);
    const setIntro = (param) => {
      intro.value = param;

      if (sound.value !== null) {
        escapePage();
      }
    };

    const fadeDuration = 6;
    const faded = ref(false);
    const escapePage = async () => {
      if (intro.value !== "N") {
        await sleep(500);
        faded.value = true;
        await sleep(fadeDuration * 1000);
      }

      switch (intro.value) {
        case "A":
          router.push({ name: "Hello", params: { mode: "automatic" } });
          break;
        case "S":
          router.push({ name: "Hello", params: { mode: "analogue" } });
          break;
        case "N":
          router.push({ name: "Blog" });
      }
    };

    return {
      logoSubText,
      sound,
      setSound,
      intro,
      setIntro,
      fadeDuration,
      faded,
    };
  },
};
</script>

<style scoped>
.option-box {
  animation: ob-boom-up 4s both;
  animation-delay: 4s;
  animation-timing-function: cubic-bezier(0.5, 0, 0.25, 1);
}

@keyframes ob-boom-up {
  from {
    transform: translate(-50%, 300%);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    transform: translate(-50%, 0);
  }
}
</style>
