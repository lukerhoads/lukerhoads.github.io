let
    sources = import ./nix/sources.nix;
    pkgs = import sources.nixpkgs {};
  in
  with pkgs;
  pkgs.mkShell {
      buildInputs = [
        nodejs_20
        elmPackages.lamdera
        elmPackages.elm-pages
        elmPackages.elm-format
      ];
  }

