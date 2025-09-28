async function getAllPost(){
document.write("")
/*	const res = await fetch('http://localhost:3000/allpost')
	const cookie = document.cookie
	alert(cookie)
	const data = await res.json()
	
	for(i = 0;i < data.length;i++){
	
	let child = `
	            	<div>
	            	    <p>${data[i].title}</p>
	            	    <p>${data[i].content}</p>
	            	    <div class="post-actions">
	            	        <a href="/post/${data[i]._id}"><button>Update</button></a>
	            	        <form action="http://localhost:3000/post/${data[i]._id}?_method=delete" method="post">
	            	            <input type="hidden" name="_method" value="delete" />
	            	            <button type="submit">Delete</button>
	            	        </form>
	            	    </div>
	            	</div>
				
	            `
	let parent = document.getElementById('list')
	parent.innerHTML+= child
	}
}*/

getAllPost()
