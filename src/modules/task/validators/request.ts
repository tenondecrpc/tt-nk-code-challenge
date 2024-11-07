export const taskCreateSchema = {
    title: {
        isString: {
            errorMessage: 'Title should be a string',
        },
        isLength: {
            options: { min: 8 },
            errorMessage: 'Title should be at least 8 chars',
        },
    }
};

export const taskUpdateSchema = {
    title: {
        isString: {
            errorMessage: 'Title should be a string',
        },
        isLength: {
            options: { min: 8 },
            errorMessage: 'Title should be at least 8 chars',
        },
    }
};