const button = document.querySelector('button');
const main = document.querySelector('.main');

async function GetToDoList() {
	const getData = async (url) => {
			const response = await fetch(url);
			const json = await response.json();
			return json; 
	}
			const todos = await getData('https://jsonplaceholder.typicode.com/todos');
			const users = await getData('https://jsonplaceholder.typicode.com/users');
			return { todos, users }
	} 
button.addEventListener('click', async () => {
			const { todos, users } = await GetToDoList()

			todos.forEach((todo) => {
					const user = users.find((el) => el.id == todo.userId);
					main.insertAdjacentHTML(
							'beforeend',
							`<div class="task">
									<div class="checked">${todo.completed ? '<p style="color:green">V</p>' : '<p style="color:red">F</p>'}</div>
									<div class="text-task">${todo.title}
									<div class="user-task">${user ? user.name : 'Unknown'}</div>
									</div>
							</div>`
					);
			});
	} 
)

