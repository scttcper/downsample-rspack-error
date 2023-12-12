import { ASAP } from 'downsample/methods/ASAP';
import './index.css';

document.querySelector('#root')!.innerHTML = `
<div class="content">
  <h1>Vanilla Rsbuild</h1>
  <p>Start building amazing things with Rsbuild.</p>
</div>
`;

function main() {
  const chartWidth = 1000;
  const smooth = ASAP(
    [
      [0, 1000],
      [1, 1243],
    ],
    chartWidth
  );
  console.log({ smooth });
}

main();
