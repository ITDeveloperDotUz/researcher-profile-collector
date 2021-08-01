import {useEffect, useState} from "react"

export default function useDarkMode() {
	let tc = localStorage.getItem('themeColor')
	if (!tc){
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		tc = mq.matches ? 'dark' : 'light'
	}
	const [theme, setTheme] = useState(tc)

	const colorTheme = theme === 'light' ? 'dark' : 'light'
	useEffect(() => {
			const root = window.document.documentElement
			root.classList.add(theme)
			root.classList.remove(colorTheme)
			localStorage.setItem('themeColor', theme)
		},
		[theme,colorTheme]
	)
	return [colorTheme, setTheme]
}
