module Content exposing (BlogPost, about, posts)

import DataSource exposing (DataSource)
import DataSource.File as File
import DataSource.Glob as Glob
import List
import OptimizedDecoder as Decode exposing (Decoder)


type alias BlogPostMetadata =
    { filePath : String
    , slug : String
    }


postFiles : DataSource (List BlogPostMetadata)
postFiles =
    Glob.succeed
        (\filePath slug -> { filePath = filePath, slug = slug })
        |> Glob.captureFilePath
        |> Glob.match (Glob.literal "content/blog/")
        |> Glob.capture Glob.wildcard
        |> Glob.match (Glob.literal ".md")
        |> Glob.toDataSource


type alias BlogPost =
    { slug : String
    , body : String
    , title : String
    , author : String
    , date : String
    , description : String
    , thumbnail : String
    }


blogPostDecoder : String -> String -> Decoder BlogPost
blogPostDecoder slug body =
    Decode.map5 (BlogPost slug body)
        (Decode.field "title" Decode.string)
        (Decode.field "author" Decode.string)
        (Decode.field "date" Decode.string)
        (Decode.field "description" Decode.string)
        (Decode.field "thumbnail" Decode.string)


posts : DataSource (List BlogPost)
posts =
    postFiles
        |> DataSource.map
            (List.map
                (\postMetadata ->
                    File.bodyWithFrontmatter
                        (blogPostDecoder postMetadata.slug)
                        postMetadata.filePath
                )
            )
        |> DataSource.resolve


about : DataSource String
about =
    File.bodyWithoutFrontmatter "content/about.md"
