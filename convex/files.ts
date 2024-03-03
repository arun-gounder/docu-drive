import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const create_file = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx, args) {
        const user = await ctx.auth.getUserIdentity();
        if (!user) {
            throw new ConvexError('Please Login to upload a file')
        }
        await ctx.db.insert('files', {
            name: args.name
        })
    }
})


export const get_files = query({
    args: {},
    async handler(ctx, srgs) {
        const user = await ctx.auth.getUserIdentity();
        if (!user) {
           return []
        }
        return ctx.db.query('files').collect()
    }
})