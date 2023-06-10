import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],

// vite가 Rust 오류를 감추지 않게 한다.
	clearScreen: false,
// Tauri가 포트값 고정을 요구하므로 그 포트를 쓸 수 없다면 실패하도록 한다.
	server: {
		strictPort: true,
	},
	// `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
	// `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE`,`TAURI_DEBUG`
	// 환경 변수를 사용
	envPrefix: ['VITE_', 'TAURI_'],
	build: {
		// Tauri는 es2021을 지원
		target: ['es2021', 'chrome100', 'safari13'],
		// 디버그 빌드에서는 최소화하지 않는다.
		minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
		// 디버그 빌드에서 소스맵을 제공한다.
		sourcemap: !!process.env.TAURI_DEBUG,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
