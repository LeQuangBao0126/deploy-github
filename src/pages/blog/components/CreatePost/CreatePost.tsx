import { useAddPostMutation, useGetPostQuery, useGetPostsQuery, useUpdatePostMutation } from 'pages/blog/blog.service'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { Post } from 'types/blog.type'
import { cancelEditPost } from 'pages/blog/blog.slice'
const initialState: Omit<Post, 'id'> = {
  title: '',
  description: '',
  publishDate: '',
  featuredImage: '',
  published: false
}

export default function CreatePost() {
  const [formData, setFormData] = useState<Omit<Post, 'id'>>(initialState)
  const [addPost] = useAddPostMutation()
  const { refetch } = useGetPostsQuery()
  const appDispatch = useAppDispatch()
  const postId = useSelector((state: RootState) => state.blog.postId)
  // khi ma ko co postId thi se ko goi
  const { data } = useGetPostQuery(postId, { skip: !postId })
  const [updatePost] = useUpdatePostMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (postId) {
      updatePost({ id: postId, body: { ...formData, id: postId } })
      setFormData(initialState)
      refetch()
    } else {
      await addPost(formData).unwrap()
      setFormData(initialState)
      refetch()
    }
  }

  const cancelEdit = () => {
    appDispatch(cancelEditPost())
    setFormData(initialState)
  }

  useEffect(() => {
    if (data) {
      setFormData(data || initialState)
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>Title</label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          value={formData.title}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              title: event.target.value
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='featuredImage' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
          Featured Image
        </label>
        <input
          type='text'
          id='featuredImage'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Url image'
          value={formData.featuredImage}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              featuredImage: event.target.value
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <div>
          <label htmlFor='description' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
            Description
          </label>
          <textarea
            id='description'
            rows={3}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
            placeholder='Your description...'
            required
            value={formData.description}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                description: event.target.value
              }))
            }
          />
        </div>
      </div>
      <div className='mb-6'>
        <label htmlFor='publishDate' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
          Publish Date
        </label>
        <input
          type='datetime-local'
          id='publishDate'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              publishDate: event.target.value
            }))
          }
        />
      </div>
      <div className='mb-6 flex items-center'>
        <input
          id='publish'
          type='checkbox'
          className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              published: event.target.checked
            }))
          }
        />
        <label htmlFor='publish' className='ml-2 text-sm font-medium text-gray-900'>
          Publish
        </label>
      </div>
      <div>
        {postId && (
          <>
            <button
              className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
              type='submit'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Update Post
              </span>
            </button>
            <button
              className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
              type='button'
              onClick={() => cancelEdit()}
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Cancel
              </span>
            </button>
          </>
        )}
        {!postId && (
          <>
            <div>
              <button
                className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
                type='submit'
              >
                <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                  Publish Post
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  )
}
