async function getAllPost(){
	const res = await fetch('https://blogpost-ogi9.onrender.com/allpost')
	const data = await res.json()
	
	for(i = 0;i < data.length;i++){
	
	let child = `
					<div>
	                	<p>${data[i].title}</p>
	                	<p>${data[i].content}</p>
	            	</div>
				
	            `
	let parent = document.getElementById('list')
	parent.innerHTML+= child
	}
}

getAllPost()
