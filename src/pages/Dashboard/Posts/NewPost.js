import { useCallback, useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { FiSave } from 'react-icons/fi';
import 'react-quill/dist/quill.snow.css';
import Input from '../../../components/Input';
import CustomSelect from '../../../components/CustomSelect';
import { axiosInstance, axiosPrivate } from '../../../utils/axios';
import { BASE_URL } from '../../../environments';
import FormAction from '../../../components/FormAction';
import CustomSwitch from '../../../components/CustomSwitch';
import { UserContext } from '../../../contexts/UserContext';
import { formats, modules } from '../../../constants/richText';
import FileUpload from '../../../components/FileUpload';
import usePost from '../../../hooks/usePost';
import useCategory from '../../../hooks/useCategory';
import useTag from '../../../hooks/useTag';

function NewPost() {
  const { user } = useContext(UserContext);
  const { createPost } = usePost();
  const { createCategory, getCategories } = useCategory();
  const { createTag, getTags } = useTag();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({
    categories: [],
    tags: [],
  });
  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    categories: [],
    tags: [],
    published: false,
    cover: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, tagsResponse] = await Promise.all([
          getCategories(),
          getTags(),
        ]);

        const categoriesOptions = categoriesResponse.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        const tagsOptions = tagsResponse.data.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        setOptions({
          categories: categoriesOptions,
          tags: tagsOptions,
        });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const validateFields = () => {
    const requiredFields = ['title', 'slug', 'content', 'categories', 'tags'];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!post[field].length) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Assuming you have an inputChangeHandler for each input field
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear the error for the input field being edited
    setErrors((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  const handleContentChange = (e) => {
    setPost((prev) => ({
      ...prev,
      content: e,
    }));
  };

  const handleCreate = async (inputValue, type) => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.post(`${BASE_URL}/api/${type}`, {
        data: { name: inputValue },
      });
      const newOption = {
        label: inputValue,
        value: data.data.id,
      };
      setOptions((prevOptions) => ({
        ...prevOptions,
        [type]: [...prevOptions[type], newOption],
      }));
      setPost((prevPost) => ({
        ...prevPost,
        [type]: [...prevPost[type], newOption],
      }));
    } catch (error) {
      console.log('Error creating new option:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchChange = (e) => {
    setPost((prev) => ({
      ...prev,
      published: !prev.published,
    }));
  };

  const handleChange = (newValue, type) => {
    setPost((prev) => ({
      ...prev,
      [type]: newValue,
    }));

    // Clear the error for the input field being edited
    setErrors((prev) => ({
      ...prev,
      [type]: '',
    }));
  };

  const handleSubmit = async () => {
    const isValid = validateFields();

    if (isValid) {
      setIsLoading(true);

      const body = {
        title: post.title,
        slug: post.slug,
        content: post.content,
        categories: post.categories.map((category) => category.value),
        tags: post.tags.map((tag) => tag.value),
        authorId: user.id,
        published: post.published,
        cover: post.cover,
      };
      try {
        await createPost(body);
        // Reset the form and clear errors
        setPost({
          title: '',
          slug: '',
          content: '',
          categories: [],
          tags: [],
        });
        setErrors({});
      } catch (error) {
        console.log('Error creating new post:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPost((prev) => ({
          ...prev,
          cover: reader.result,
        }));
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
  }, []);

  const handleReset = () => {
    setPost((prev) => ({
      ...prev,
      cover: '',
    }));
  };

  const config = {
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg'],
    },
    maxFiles: 1,
    maxSize: 5000000,
    onDrop,
  };

  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <h2 className="text-xl font-bold mb-5 flex">New Post</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-3/4">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm">
            <Input
              key="title"
              hasLabel={true}
              handleChange={handleInputChange}
              value={post.title}
              labelText="Title"
              labelFor="title"
              id="title"
              name="title"
              type="text"
              isRequired={true}
              placeholder="Post title"
              error={errors.title}
            />
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={post.content}
              onChange={handleContentChange}
              className="mt-8"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/4">
          <div className="bg-white rounded-md p-4 border border-slate-300 drop-shadow-sm">
            <FileUpload
              config={config}
              handleReset={handleReset}
              imagePreview={post.cover}
            />
            <Input
              key="slug"
              hasLabel={true}
              handleChange={handleInputChange}
              value={post.slug}
              labelText="Slug"
              labelFor="slug"
              id="slug"
              name="slug"
              type="text"
              isRequired={true}
              placeholder="Slug"
              error={errors.slug}
            />
            <CustomSelect
              options={options.categories}
              handleCreate={(inputValue) =>
                handleCreate(inputValue, 'categories')
              }
              handleChange={(newValue) => handleChange(newValue, 'categories')}
              value={post.categories}
              isLoading={isLoading}
              labelFor="categories"
              labelText="Categories"
              hasLabel={true}
              name="categories"
              id="categories"
              error={errors.categories}
            />
            <CustomSelect
              options={options.tags}
              handleCreate={(inputValue) => handleCreate(inputValue, 'tags')}
              handleChange={(newValue) => handleChange(newValue, 'tags')}
              value={post.tags}
              isLoading={isLoading}
              labelFor="tags"
              labelText="Tags"
              hasLabel={true}
              name="tags"
              id="tags"
              error={errors.tags}
            />
            <CustomSwitch
              hasLabel={true}
              handleChange={handleSwitchChange}
              checked={post.published}
              labelText="Public?"
              labelFor="published"
              id="published"
              name="published"
              isRequired={true}
              error={errors.published}
            />
            <FormAction
              handleSubmit={handleSubmit}
              action="button"
              icon={<FiSave className="h-5 w-5 text-white" />}
              text="Publish"
              color="purple"
              name="Publish"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;