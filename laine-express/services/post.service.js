const {PostModel} = require("../models/post.model");

const GetPosts = async (filter, projection = null, options = null) => {
    const {limit, page, skip, sort, query} = filter;
    const result = await PostModel
        .find(query, projection, options)
        .skip(skip)
        .limit(limit)
        .sort(sort);
    const counts = await PostModel.countDocuments(query);

    return {
        error: null,
        data: {
            data: result,
            pagination: {
                perPage: limit, current: page, counts, pages: Math.ceil(counts/limit)
            },
            query
        }
    }
};

const GetPost = async (filter, projection = null, options = null) => {
    const result = await PostModel.findOne(filter, projection, options).lean();
    if (result === null) {
        return { error: 'Data Not Found', data: null}
    }

    return {data: result} ;
};

const CreatePost = async (params) => {
    const result = await PostModel.create(params, null);
    if (!result) {
        return {error: 'Failed to proceed data.'};
    }

    return {data: result};
};

const UpdatePost = async (filter, params) => {
    const result = await PostModel.findOneAndUpdate(filter,params, null);
    if (!result) {
        return {error: 'Failed to proceed data.'};
    }

    return {data: result};
};

const DeletePost = async (filter) => {
    const result = await PostModel.deleteMany(filter, null);
    if (!result) {
        return {error: 'Failed to proceed data.'};
    }

    return {data: result};
};

exports.PostService = {
    GetPosts,
    GetPost,
    CreatePost,
    UpdatePost,
    DeletePost
};