export function injectCss() {
  const style = document.createElement('style');
  style.innerHTML = `
        tr.afd-error > td:first-child {
            border-left: red solid 2px;
        }
    `;
  document.head.appendChild(style);
}
