const {PostService} = require("../services/post.service");
const {v4: uuid} = require("uuid");
const {GenerateQuery} = require("../utils/helper");

const GetPostsByQuery = async (req, res) => {
    const { limit, page, skip, sort } = GenerateQuery(req.query);
    const query = {};

    const result = await PostService.GetPosts({limit, page, skip, sort, query});

    return res.status(200).send({data: result.data});
};

const CreatePost = async (req, res) => {
    const params = req.body;
    params.id = uuid(null, null, null);
    params.userId = req.user?.id;

    const result = await PostService.CreatePost(params);
    if (result.error) {
        return res.status(result?.status || 400).send({data: result.error});
    }

    return res.status(200).send({data: 'Success'});
};

const GetPostById = async (req, res) => {
    const {id} = req.params;

    const result = await PostService.GetPost({id});
    if (result.error) {
        return res.status(result?.status || 400).send({data: result.error});
    }

    return res.status(200).send({data: result.data});
};

const UpdatePost = async (req, res) => {
    const params = req.body;
    const {id} = req.params;

    const result = await PostService.UpdatePost({id}, params);
    if (result.error) {
        return res.status(result?.status || 400).send({data: result.error});
    }

    return res.status(200).send({data: result.data});
};

const DeletePost = async (req, res) => {
    const ids = req.params.id.split(',');

    const result = await PostService.DeletePost({ id: ids });
    if (result.error) {
        return res.status(result?.status || 400).send({data: result.error});
    }

    return res.status(200).send({data: result.data});
};

exports.PostController = {
    GetPostsByQuery,
    CreatePost,
    GetPostById,
    UpdatePost,
    DeletePost
};