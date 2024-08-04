document.addEventListener("DOMContentLoaded", () => {
    const captures = document.querySelectorAll(".glow-capture")
    if (captures.length) {
        captures.forEach(c => {
            const clone = c
                .children[0]
                .cloneNode(true)
            const overlay = c.querySelector(".glow-overlay")
            overlay.appendChild(clone)

            "mousemove touchstart"
                .split(" ")
                .forEach(ev => {
                    if (ev == "touchstart") 
                        return

                    c.addEventListener(ev, (ev) => {
                        const x = ev.pageX - c.offsetLeft
                        const y = ev.pageY - c
                            .offsetTop

                            overlay
                            .style
                            .setProperty("--x", `${x}px`)
                        overlay
                            .style
                            .setProperty("--y", `${y}px`)
                        overlay
                            .style
                            .setProperty("--opacity", "1")
                    })
                })

            "mouseleave touchend"
                .split(" ")
                .forEach(ev => {
                    c.addEventListener(ev, () => {
                        overlay
                            .style
                            .setProperty("--opacity", "0")
                    })
                })
        })
    }

})