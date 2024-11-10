// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//   const API_URL = "https://mongo-db-green.vercel.app/api/posts"
//   const [posts,setPosts] = useState([])
//   const[course,setCourse] = useState("")
//   const [description,setDescription]= useState("")
//   const[editPost , seteditPost]=useState(null)
//   const fetchPosts = async ()=>{
//     try{
//     const response = await axios.get(API_URL)
//     setPosts(response.data)
//     }catch(error){
// console.log("error fetching posts:", error)
//     }
//   }
// const updatePost = async (id)=>{
//  const response =  await axios.put(`${API_URL}/${id}`,{
//     Course : course,
//     description : description
//    })
//    setPosts(posts.map((post)=>(post._id === id ? response.data : post)))
//    setCourse("")
//    setDescription("")
//    seteditPost(null)
//   }
//   useEffect(()=>{
//     fetchPosts()
//   },[])

//   const add =async ()=>{
//     try{
// const response = await axios.post(API_URL,{
//   Course : course ,
// description : description
// })
// setPosts([...posts,response.data])
// setCourse("")
// setDescription("")
//     }catch (err){
//       console.log("error creating post", err.response ? err.response.data : err.message);
//     }

//   }
 
//  const deletePost = async (id)=>{
//     try{
// await axios.delete(`${API_URL}/${id}`)
// setPosts(posts.filter((post)=>post._id !== id))
//       }
//  catch(error){
//   console.error(error)
// }
//   }


//   return (
//     <div>
// <input 
// placeholder='course'
// value={course}
// onChange={(e)=>{
//   setCourse(e.target.value)
// }}
// />
// <input 
// placeholder='description'
// value={description}
// onChange={(e)=>{
//   setDescription(e.target.value)
// }}
// />

// {editPost ? (
//   <button
//   onClick={()=>{
//     updatePost(editPost) 
//   }}
//   >update</button>
// ) :

// ( <button onClick={add}>add</button> )}

//       <ol>
// {posts.map((post)=>(
//  <li key={post._id} >
//  <strong>{post.Course} </strong> : {post.description}
//  <button  
//  onClick={()=>{
//   seteditPost(post._id)
//   setCourse(post.Course)
//   setDescription(post.description)
//  }}
//  >Edit</button>
//  <button onClick={()=>deletePost(post._id)}>delete</button>

// </li>

// ))}

//       </ol>
//     </div>
//   )
// }

// export default App


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const API_URL = "https://mongo-db-green.vercel.app/api/posts"
//   const [posts, setPosts] = useState([])
//   const [course, setCourse] = useState("")
//   const [description, setDescription] = useState("")
//   const [editPost, setEditPost] = useState(null)

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(API_URL)
//       setPosts(response.data)
//     } catch (error) {
//       console.log("error fetching posts:", error)
//     }
//   }

//   const updatePost = async (id) => {
//     const response = await axios.put(`${API_URL}/${id}`, {
//       Course: course,
//       description: description
//     })
//     setPosts(posts.map((post) => (post._id === id ? response.data : post)))
//     setCourse("")
//     setDescription("")
//     setEditPost(null)
//   }

//   useEffect(() => {
//     fetchPosts()
//   }, [])

//   const add = async () => {
//     try {
//       const response = await axios.post(API_URL, {
//         Course: course,
//         description: description
//       })
//       setPosts([...posts, response.data])
//       setCourse("")
//       setDescription("")
//     } catch (err) {
//       console.log("error creating post", err.response ? err.response.data : err.message);
//     }
//   }

//   const deletePost = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`)
//       setPosts(posts.filter((post) => post._id !== id))
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
//         <input
//           className="w-full p-2 mb-3 md:mb-4 border border-gray-300 rounded"
//           placeholder="Course"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         />
//         <input
//           className="w-full p-2 mb-3 md:mb-4 border border-gray-300 rounded"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         {editPost ? (
//           <button
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition duration-200"
//             onClick={() => updatePost(editPost)}
//           >
//             Update
//           </button>
//         ) : (
//           <button
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
//             onClick={add}
//           >
//             Add
//           </button>
//         )}
//       </div>

//       <div className="max-w-md mx-auto mt-4 md:mt-6">
//         <ol className="space-y-3 md:space-y-4">
//           {posts.map((post) => (
//             <li
//               key={post._id}
//               className="bg-white shadow-md rounded-lg p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
//             >
//               <div className="flex-1">
//                 <strong className="text-lg text-gray-700">{post.Course}</strong> :{" "}
//                 <span className="text-gray-600">{post.description}</span>
//               </div>
//               <div className="flex space-x-2 mt-2 md:mt-0">
//                 <button
//                   className="text-sm text-blue-500 hover:text-blue-700"
//                   onClick={() => {
//                     setEditPost(post._id)
//                     setCourse(post.Course)
//                     setDescription(post.description)
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-sm text-red-500 hover:text-red-700"
//                   onClick={() => deletePost(post._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const API_URL = "https://mongo-db-green.vercel.app/api/posts"
  const [posts, setPosts] = useState([])
  const [course, setCourse] = useState("")
  const [description, setDescription] = useState("")
  const [editPost, setEditPost] = useState(null)

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL) 
      setPosts(response.data)
    } catch (error) {
      console.log("error fetching posts:", error)
    }
  }

  const updatePost = async (id) => {
    const response = await axios.put(`${API_URL}/${id}`, {
      Course: course,
      description: description
    })
    setPosts(posts.map((post) => (post._id === id ? response.data : post)))
    setCourse("")
    setDescription("")
    setEditPost(null)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const add = async () => {
    try {
      const response = await axios.post(API_URL, {
        Course: course,
        description: description
      })
      setPosts([...posts, response.data])
      setCourse("")
      setDescription("")
    } catch (err) {
      console.log("error creating post", err.response ? err.response.data : err.message);
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      
      setPosts(posts.filter((post) => post._id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full sm:max-w-md bg-white shadow-md rounded-lg p-4 sm:p-6 mb-4">
        <input
          className="w-full p-2 mb-3 border border-gray-300 rounded text-sm sm:text-base"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 border border-gray-300 rounded text-sm sm:text-base"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editPost ? (
          <button
            className=" update-gradient w-full hover:bg-yellow-600 text-white font-semibold py-2 rounded mt-2 sm:mt-3 text-sm sm:text-base"
            onClick={() => updatePost(editPost)}
          >
            Update
          </button>
        ) : (
          <button
            className="Add-gradient w-full h-full hover:bg-blue-600 text-white font-semibold py-2 rounded mt-2 sm:mt-3 text-sm sm:text-base"
            onClick={add}
          >
            Add
          </button>
        )}
      </div>

      <div className="w-full sm:max-w-md">
        <ol className="space-y-3 sm:space-y-4">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white shadow-md rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
            >
              <div className="flex-1 mb-2 sm:mb-0">
                <strong className="text-sm sm:text-lg text-gray-700">{post.Course}</strong> :{" "}
                <span className="text-xs sm:text-base text-gray-600">{post.description}</span>
              </div>
              <div className="flex space-x-2">
                <button

                  className="edit text-xs sm:text-sm text-blue-500 "
                  onClick={() => {
                    setEditPost(post._id)
                    setCourse(post.Course)
                    setDescription(post.description)

                  }}
                >
                  Edit
                </button>
                <button
                  className="delete text-xs sm:text-sm "
                  onClick={() => deletePost(post._id)                    
                  }
                  disabled={!!editPost} 
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default App
