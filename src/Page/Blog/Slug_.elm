module Page.Blog.Slug_ exposing (Data, Model, Msg, page)

import Content exposing (BlogPost)
import DataSource exposing (DataSource)
import Head
import Head.Seo as Seo
import Html exposing (div, h1, img, p, text)
import Html.Attributes exposing (class, src)
import Markdown
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import View exposing (View)


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    { slug : String }


page : Page RouteParams Data
page =
    Page.prerender
        { head = head
        , routes = routes
        , data = data
        }
        |> Page.buildNoState { view = view }


routes : DataSource (List RouteParams)
routes =
    DataSource.map (\list -> List.map (\po -> { slug = po.slug }) list) Content.posts


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    let
        post =
            static.data.post
    in
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "Luke Rhoads"
        , image =
            { url = Pages.Url.external post.thumbnail
            , alt = post.title ++ " image"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = post.description
        , locale = Nothing
        , title = post.title
        }
        |> Seo.website


type alias Data =
    { post : BlogPost }


data : RouteParams -> DataSource Data
data routeParams =
    DataSource.map
        (List.filter (\po -> po.slug == routeParams.slug))
        Content.posts
        |> DataSource.andThen
            (\filteredPosts ->
                case List.head filteredPosts of
                    Just post ->
                        DataSource.succeed { post = post }

                    Nothing ->
                        DataSource.fail "Post not found"
            )


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view _ _ static =
    let
        post =
            static.data.post
    in
    { title = post.title
    , body =
        [ div []
            [ img [ src post.thumbnail ] []
            , h1 [ class "blog-post-title" ]
                [ text post.title
                ]
            , p [ class "blog-text" ] <| Markdown.toHtml Nothing post.body
            ]
        ]
    }