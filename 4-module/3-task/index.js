const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;
/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const actions = {
        [3]: (root, td) => {
          if (td.dataset.available === 'true') {
            root.classList.toggle('available', true);
          } else if (td.dataset.available === 'false') {
            root.classList.toggle('unavailable', true);
          } else if (!td.hasAttribute('data-available')) {
            root.hidden = true;
          }
        },
        [2]: (root, td) => {
          if (td.textContent === 'm') {
            root.classList.toggle('male', true);
          } else if (td.textContent === 'f') {
            root.classList.toggle('female', true);
          }
        },
        [1]: (root, td) => {
          const age = parseInt(td.textContent, 10);
    
          if (age < 18) {
            root.style.textDecoration = 'line-through';
          }
        },
      };
    
      for (const tr of table.rows) {
        Array.from(tr.cells).forEach((td, index) => {
          const fn = actions[index];
    
          if (typeof fn === 'function') {
            fn(tr, td);
          }
        });
      }
}
