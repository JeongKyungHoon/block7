import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// if (isMainThread) {
//   const worker = new Worker(__filename);
//   worker.on("message", (message) => console.log("from worker", message));
//   worker.on("exit", () => console.log("worker exit"));
//   worker.postMessage("ping");
// } else {
//   parentPort.on("message", (value) => {
//     console.log("from parent", value);
//     parentPort.postMessage("pong");
//     parentPort.close();
//   });
// }

if (isMainThread) {
  const threads = new Set();
  threads.add(new Worker(__filename, { workerData: { start: 1 } }));
  threads.add(new Worker(__filename, { workerData: { start: 2 } }));
  for (let worker of threads) {
    worker.on("message", (message) => console.log("from worker", message));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("job done");
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}