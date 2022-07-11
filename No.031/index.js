// const { sum, multiply } = require("./customMath");

import { sum, multiply } from "./customMath.js";

console.log(sum(2, 3));
console.log(multiply(2, 3));

console.log(global);
console.log(console);
console.log("데이터 노출");
console.warn("경고 노출");
console.dir({ data: "구조 노출" });
console.time("시간측정");
console.timeLog("시간측정");
console.timeEnd("시간측정");
// console.trace(); 스택 추적
console.assert(true, "참");
console.assert(false, "거짓");
// console.clear(); 로그 기록 삭제
console.count("호출 횟수");
console.count("호출 횟수");
console.countReset("호출 횟수"); // 횟수 초기화
console.count("호출 횟수");
console.group();
console.log("로그의 그룹화");
console.log("로그의 그룹화");
console.group();
console.log("로그의 그룹화1");
console.groupEnd();
console.groupEnd();
console.table({ name: "표로", data: "노출" });
console.debug("디버그 노출");
console.info({ name: "정보", data: "노출" });
console.dirxml({ name: "xml(HTML)로", data: "노출" });
console.error("error 노출");
console.groupCollapsed();
console.log("로그의 인라인 그룹화");
console.log("로그의 인라인 그룹화");
console.groupEnd();
// console.profile(); 사용하지 않을 것을 권장
// console.profileEnd(); 사용하지 않을 것을 권장
// console.timeStamp(); 사용하지 않을 것을 권장
// console.context("?"); 노출되는 것 없음

// console.log(__filename);
// console.log(__dirname);
// ES6에서 사용 불가

console.log(process);
// console.log(process.env);
console.log(process.env); // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log(process.version); // node.js의 버전
console.log(process.versions); // node.js와 연관된 프로그램들의 버전을 가진 객체
console.log(process.arch); // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform); // 플랫폼(win32/linux/sunos/freebsd/darwin)
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log(process.uptime()); // 현재 프로그램이 실행된 시간
console.log(process.pid); // 프로세스의 아이디
console.log(process.execPath); // 노드의 경로
console.log(process.cwd()); // 프로세스 실행 위치
console.log(process.cpuUsage()); // CPU 사용량

// es6에서 사용하기 위한 코드
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

import path from "path";
// console.log(path);
console.log(path.dirname(__filename)); // 폴더 경로
console.log(path.extname(__filename)); // 확장자
console.log(path.basename(__filename)); // 파일 이름
console.log(path.basename(__filename, path.extname(__filename))); // 확장자 제외한 파일 이름
console.log(path.parse(__filename)); // 경로를 root, dir, base, ext, name으로 분해
console.log(path.join("/test", __filename, "..", "..")); // 경로 합치기, 전부 합친다.
console.log(path.resolve("/test", __filename, "..", "..")); // 오른쪽에서부터 경로 합치기, '/'를 만나면 거기서 멈춤
console.log(path.resolve("/check", "/test", "testing", "..")); // 오른쪽에서부터 경로 합치기, '/'를 만나면 거기서 멈춤

import url from "url";
// const url = require("url");
console.log(url);

const { URL } = url;
const myURL = new URL(
  "https://www.google.com/search?q=nodejs&rlz=1C5CHFA_enKR1009KR1009&oq=nodejs&aqs=chrome.0.69i59l5j69i65j69i60l2.3134j0j9&sourceid=chrome&ie=UTF-8"
);
console.log("new URL():", myURL);
const parsedUrl = url.parse(
  "https://www.google.com/search?q=nodejs&rlz=1C5CHFA_enKR1009KR1009&oq=nodejs&aqs=chrome.0.69i59l5j69i65j69i60l2.3134j0j9&sourceid=chrome&ie=UTF-8"
);
console.log("url.parse():", parsedUrl);
console.log("myURL.searchParams:", myURL.searchParams);
console.log("myURL.searchParams.get('q'):", myURL.searchParams.get("q"));
console.log("myURL.searchParams.get('ie'):", myURL.searchParams.get("ie"));
console.log("myURL.searchParams.has('page'):", myURL.searchParams.has("page"));

// const querystring = require("querystring");
// const query = querystring.parse(parsedUrl.query);
// console.log(query);
// searchParams와 같다

// import { TextDecoder } from "util";
// let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

// let u8arr = new Uint8Array([240, 160, 174, 183]);
// let i8arr = new Int8Array([-16, -96, -82, -73]);
// let u16arr = new Uint16Array([41200, 47022]);
// let i16arr = new Int16Array([-24336, -18514]);
// let i32arr = new Int32Array([-1213292304]);

// console.log(utf8decoder.decode(u8arr));
// console.log(utf8decoder.decode(i8arr));
// console.log(utf8decoder.decode(u16arr));
// console.log(utf8decoder.decode(i16arr));
// console.log(utf8decoder.decode(i32arr));

// import "./worker_threads.js"; << 굳이?

import "./file.js";
