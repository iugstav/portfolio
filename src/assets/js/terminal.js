const terminal = document.getElementById("term-wrapper");

const HELP = {
	ls: {
		desc: "Lista os arquivos e diretórios disponíveis",
		usage: "ls",
	},
	help: {
		desc: "Lista todos os comandos disponíveis",
		usage: "help | help [comando]",
	},
	version: {
		desc: "Mostra a versão atual do terminal",
		usage: "version",
	},
	clear: {
		desc: "Limpa o histórico do terminal",
		usage: "clear",
	},
};

const commands = {
	ls: {
		run: (argCount) => {
			if (argCount > 1) {
				return -1;
			}

			return "<pre>about-me\tblog</pre>";
		},
	},

	help: {
		run: () => {
			const arr = [];

			for (const [name, attr] of Object.entries(HELP)) {
				arr.push(
					`<pre>${name}\n   ${attr.desc}\n   uso: ${attr.usage}</pre>`,
				);
			}

			return arr.join("\n");
		},
	},
	version: {
		run: () => {
			return "<pre>0.1.0</pre>";
		},
	},

	clear: {
		run: () => {
			terminal.innerHTML = `<p class="text-ice-main">Digite <span class="text-code-cyan">help</span> para ver os comandos disponíveis</p>`;
		},
	},
};

const html = `
<div id="term-text" class="mt-2">
    <p class="text-code-green">iugstav&commat;portfolio <span class="text-ice-main">~</span></p>
    
    <div id="row" class="flex gap-2">
        <span class="text-ice-main ">&#36;</span> 
        <div
            contenteditable="true"
            id="terminal-input"
            spellcheck="false" 
            autocorrect="false" 
            autospell="false"
            class="w-[90%] h-auto break-words bg-transparent text-ice-main jetbrains-mono overflow-hidden box-border focus:outline-none"
        ></div>
    </div>
</div>`;

function getLastRow() {
	const lastChild = terminal.children[terminal.childElementCount - 1];
	const lastRowInTerminal =
		lastChild.children[lastChild.childElementCount - 1];

	return lastRowInTerminal;
}

function focusOnLastRow() {
	// children[1] é a textarea
	getLastRow().children[1].focus();
}

terminal.addEventListener("click", () => {
	focusOnLastRow();
});

// adiciona pro input original
// getLastRow().children[1].oninput = handleTextareaInput;
getLastRow().children[1].onkeydown = handleTextareaKeyDown;

function handleTextareaInput(ev) {
	const splittedInput = ev.target.innerText.trim().split(" ");
	const command = splittedInput[0];
	if (HELP[command]) {
		ev.target.innerHTML = ev.target.innerText.replace(
			command,
			`<span class="text-code-cyan">${command}</span>`,
		);

		window
			.getSelection()
			.setPosition(ev.target, ev.target.innerText.length - 1);
	}
}

function handleTextareaKeyDown(ev) {
	const createRow = () => {
		terminal.insertAdjacentHTML("beforeend", html);

		const input = getLastRow().children.item(1);
		input.addEventListener("keydown", handleTextareaKeyDown);

		focusOnLastRow();
	};

	switch (ev.key) {
		case "Enter":
			ev.preventDefault();
			ev.target.setAttribute("readonly", "");

			if (ev.target.innerText.trim().length === 0) {
				createRow();
				return;
			}

			const splittedInput = ev.target.innerText.trim().split(" ");
			const command = splittedInput[0];

			if (!HELP[command]) {
				const errorMsg = `<p class="text-ice-main"><span class='text-code-cyan'>erro:</span> comando inválido.</p>`;
				terminal.insertAdjacentHTML("beforeend", errorMsg);
			}

			switch (command) {
				case "help":
				case "version": {
					const output = `<div class="text-ice-main">
                    ${commands[command].run()}
                    </div>`;

					terminal.insertAdjacentHTML("beforeend", output);
					break;
				}

				case "ls": {
					const args = splittedInput.slice(1);

					const output = `<div class="text-ice-main">
                    ${commands[command].run(args.length, args)}
                    </div>`;

					terminal.insertAdjacentHTML("beforeend", output);
					break;
				}

				case "clear":
					commands[command].run();

				default:
					break;
			}

			createRow();
			break;

		case "Backspace":
			break;

		case "ArrowLeft":
			break;

		case "ArrowUp":
			break;

		case "ArrowUp":
			ev.preventDefault();
			break;

		case "ArrowDown":
			ev.preventDefault();
			break;

		default:
			// console.log(getCharBeforeCaret())
			break;
	}
}
