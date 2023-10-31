module Shared exposing (Data, Model, Msg(..), SharedMsg(..), template)

import Browser.Navigation
import DataSource
import Html exposing (Html, a, div, h1, img, p, text)
import Html.Attributes exposing (class, href, src, target)
import Pages.Flags
import Pages.PageUrl exposing (PageUrl)
import Path exposing (Path)
import Route exposing (Route)
import SharedTemplate exposing (SharedTemplate)
import View exposing (View)
import Html.Events exposing (onClick)
import Platform.Cmd as Cmd


template : SharedTemplate Msg Model Data msg
template =
    { init = init
    , update = update
    , view = view
    , data = data
    , subscriptions = subscriptions
    , onPageChange = Just OnPageChange
    }


type Msg
    = OnPageChange
        { path : Path
        , query : Maybe String
        , fragment : Maybe String
        }
    | SharedMsg SharedMsg
    | ToggleMobileMenu


type alias Data =
    ()


type SharedMsg
    = NoOp


type alias Model =
    { showMobileMenu : Bool
    }


init :
    Maybe Browser.Navigation.Key
    -> Pages.Flags.Flags
    ->
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : route
            , pageUrl : Maybe PageUrl
            }
    -> ( Model, Cmd Msg )
init navigationKey flags maybePagePath =
    ( { showMobileMenu = False }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnPageChange _ ->
            ( { model | showMobileMenu = False }, Cmd.none )

        SharedMsg globalMsg ->
            ( model, Cmd.none )
        ToggleMobileMenu ->
            ({ showMobileMenu = not model.showMobileMenu }, Cmd.none)


subscriptions : Path -> Model -> Sub Msg
subscriptions _ _ =
    Sub.none


data : DataSource.DataSource Data
data =
    DataSource.succeed ()


header : msg -> Model -> Html msg
header toggle model =
    div [ class "header-main" ] [
        div [ class "header container" ]
            [ a [ href "/" ] [ h1 [] [ text "Luke Rhoads" ] ]
            , div [ class "icons" ]
                [ div [ class "icon" ]
                    [ a [ href "https://github.com/lukerhoads", target "_blank" ]
                        [ img [ src "/images/Github.svg" ] []
                        ]
                    ]
                , div [ class "icon" ]
                    [ a [ href "https://www.linkedin.com/in/luke-rhoads-283198190", target "_blank" ]
                        [ img [ src "/images/LinkedIn.svg" ] []
                        ]
                    ]
                , div [ class "icon" ]
                    [ a [ href "https://connect.garmin.com/modern/profile/4e9294a9-9886-4b93-9389-649ef03f7342", target "_blank" ]
                        [ img [ src "/images/Garmin.svg" ] []
                        ]
                    ]
                , div [ class "menu-icon", onClick toggle ] [
                    img [ src "/images/Arrow.svg", class (if model.showMobileMenu then "reverse" else "") ] []
                ]
                ]
            ]
        ,div [ class ("menu container" ++ (if model.showMobileMenu then " visible" else "")) ] [
                div [ class "menu-item" ] [
                    a [ href "https://github.com/lukerhoads", target "_blank" ] [ text "Github" ]
                ],
                div [ class "menu-item" ] [
                    a [ href "https://www.linkedin.com/in/luke-rhoads-283198190", target "_blank" ] [ text "LinkedIn" ]
                ],
                div [ class "menu-item" ] [
                    a [ href "https://connect.garmin.com/modern/profile/4e9294a9-9886-4b93-9389-649ef03f7342", target "_blank" ] [ text "Garmin Connect" ]
                ]
                ]
    ]


footer : Html msg
footer =
    div [ class "footer container" ]
        [ p [] [ text "Built in Elm, with ♡" ]
        ]


view :
    Data
    ->
        { path : Path
        , route : Maybe Route
        }
    -> Model
    -> (Msg -> msg)
    -> View msg
    -> { body : Html msg, title : String }
view sharedData page model toMsg pageView =
    { body = div [ class "main" ] (header (toMsg ToggleMobileMenu) model :: pageView.body ++ [ footer ])
    , title = pageView.title
    }
