import {defineConfig} from 'sanity'
import user from './user'
import pin from './pin'
import comment from './comment'
import save from './save'
import postedBy from './postedBy'

export const schemaTypes = [
    comment, postedBy, user, save, pin
]

export default defineConfig({
    // ...rest of config
    schema: {
        types: schemaTypes
    }
})