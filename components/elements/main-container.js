const Container = ({children, theme}) => {
	const themes = {
		primary: 'bg-rbx-porto bg-fixed bg-cover py-36',
		secondary: 'bg-rbx-green bg-[length:50px_50px] py-36'
	};
	return <div className={themes[theme]} >{children}</div>
}
export default Container;